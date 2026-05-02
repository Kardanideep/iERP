const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../../frontend/data');
const outDir = path.join(__dirname, '../csv_exports');

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

function safeCsv(val) {
    if (val === null || val === undefined) return '';
    let str = String(val);
    if (str.includes('"') || str.includes(',') || str.includes('\n') || str.includes('\r')) {
        str = str.replace(/"/g, '""');
        return `"${str}"`;
    }
    return str;
}

function writeCsv(filename, headers, rows) {
    const lines = [headers.join(',')];
    for (const row of rows) {
        lines.push(row.map(safeCsv).join(','));
    }
    fs.writeFileSync(path.join(outDir, filename), lines.join('\n'));
    console.log(`Generated ${filename}`);
}

function readJson(filename) {
    return JSON.parse(fs.readFileSync(path.join(dataDir, filename), 'utf8'));
}

// Ensure unique IDs
let idCounters = {};
function nextId(table) {
    if (!idCounters[table]) idCounters[table] = 1;
    return idCounters[table]++;
}

try {
    // 1. blog.json
    const blogData = readJson('blog.json');
    const blogCatMap = {};
    const blogCategories = [];
    blogData.categories.forEach(name => {
        const id = nextId('blog_categories');
        blogCatMap[name] = id;
        blogCategories.push([id, name]);
    });
    writeCsv('blog_categories.csv', ['id', 'name'], blogCategories);

    const blogs = [];
    const processPost = (p, isFeatured) => {
        let catId = blogCatMap[p.category] || 1;
        blogs.push([
            p.id, catId, p.title, p.excerpt, p.content, p.date, p.author, p.role || '', p.image, p.context || '', p.implementationText || '', p.quote || '', isFeatured
        ]);
    };
    if (blogData.featured) processPost(blogData.featured, true);
    if (blogData.posts) blogData.posts.forEach(p => processPost(p, false));
    writeCsv('blogs.csv', ['id', 'category_id', 'title', 'excerpt', 'content', 'date', 'author_name', 'author_role', 'image_url', 'context', 'implementation_text', 'quote', 'is_featured'], blogs);

    // 2. testimonials.json
    const testData = readJson('testimonials.json');
    const testimonials = testData.map(t => [t.id, t.name, t.role, t.institution, t.quote, t.image]);
    writeCsv('testimonials.csv', ['id', 'name', 'role', 'institution', 'quote', 'image_url'], testimonials);

    // 3. faq.json & faqs.json
    const faqData = readJson('faq.json');
    const faqCatMap = {};
    const faqCats = [];
    faqData.categories.forEach(c => {
        const id = nextId('faq_categories');
        faqCatMap[c] = id;
        faqCats.push([id, c]);
    });
    writeCsv('faq_categories.csv', ['id', 'name'], faqCats);

    const faqs = [];
    faqData.questions.forEach(q => {
        faqs.push([q.id, faqCatMap[q.category] || 1, q.q, q.a]);
    });
    writeCsv('faqs.csv', ['id', 'category_id', 'question', 'answer'], faqs);

    // 4. case-studies.json
    const caseData = readJson('case-studies.json');
    const caseCatMap = {};
    const caseCats = [];
    caseData.categories.forEach(c => {
        const id = nextId('case_study_categories');
        caseCatMap[c] = id;
        caseCats.push([id, c]);
    });
    writeCsv('case_study_categories.csv', ['id', 'name'], caseCats);

    const caseStudies = [];
    const caseResults = [];
    caseData.studies.forEach(s => {
        caseStudies.push([s.id, caseCatMap[s.category] || 1, s.universityName, s.title, s.summary, s.fullStory, s.image]);
        if (s.results) {
            s.results.forEach(r => {
                caseResults.push([nextId('case_study_results'), s.id, r]);
            });
        }
    });
    writeCsv('case_studies.csv', ['id', 'category_id', 'university_name', 'title', 'summary', 'full_story', 'image_url'], caseStudies);
    writeCsv('case_study_results.csv', ['id', 'case_study_id', 'result_text'], caseResults);

    // 5. pricing.json
    const priceData = readJson('pricing.json');
    const pricingPlans = [];
    const pricingFeatures = [];
    const pricingTechnical = [];
    priceData.plans.forEach(p => {
        const id = nextId('pricing_plans');
        pricingPlans.push([id, p.name, p.monthlyPrice, p.annualPrice, p.saveAmount || '', p.period, p.desc, p.cta, p.popular]);
        if (p.features) {
            p.features.forEach(f => pricingFeatures.push([nextId('pricing_features'), id, f]));
        }
        if (p.technicalDetails) {
            p.technicalDetails.forEach(t => pricingTechnical.push([nextId('pricing_technical_details'), id, t]));
        }
    });
    writeCsv('pricing_plans.csv', ['id', 'name', 'monthly_price', 'annual_price', 'save_amount', 'period', 'description', 'cta_text', 'is_popular'], pricingPlans);
    writeCsv('pricing_features.csv', ['id', 'pricing_plan_id', 'feature_text'], pricingFeatures);
    writeCsv('pricing_technical_details.csv', ['id', 'pricing_plan_id', 'detail_text'], pricingTechnical);

    // 6. about.json
    const aboutData = readJson('about.json');
    const infoId = nextId('company_info');
    writeCsv('company_info.csv', ['id', 'hero_title', 'hero_subtitle', 'story_title', 'mission_title', 'mission_description', 'vision_title', 'vision_description'], [
        [infoId, aboutData.hero.title, aboutData.hero.subtitle, aboutData.story.title, aboutData.mission.title, aboutData.mission.description, aboutData.vision.title, aboutData.vision.description]
    ]);
    const storyParas = [];
    aboutData.story.paragraphs.forEach(p => storyParas.push([nextId('company_story_paragraphs'), infoId, p]));
    writeCsv('company_story_paragraphs.csv', ['id', 'company_info_id', 'paragraph_text'], storyParas);
    
    const stats = [];
    aboutData.stats.forEach(s => stats.push([nextId('company_stats'), s.label, s.value]));
    writeCsv('company_stats.csv', ['id', 'label', 'value'], stats);
    
    const values = [];
    aboutData.values.forEach(v => values.push([nextId('company_values'), v.title, v.description, v.icon]));
    writeCsv('company_values.csv', ['id', 'title', 'description', 'icon'], values);
    
    const team = [];
    aboutData.team.forEach(t => team.push([nextId('team_members'), t.name, t.role, t.bio, t.avatar]));
    writeCsv('team_members.csv', ['id', 'name', 'role', 'bio', 'avatar_id'], team);
    
    const timeline = [];
    aboutData.timeline.forEach(t => timeline.push([nextId('company_timeline'), t.year, t.title, t.description]));
    writeCsv('company_timeline.csv', ['id', 'year', 'title', 'description'], timeline);

    // 7. benefits.json
    const benefitsData = readJson('benefits.json');
    const benefits = [];
    benefitsData.forEach(b => benefits.push([nextId('benefits'), b.title, b.description, b.icon]));
    writeCsv('benefits.csv', ['id', 'title', 'description', 'icon'], benefits);

    // 8. steps.json
    const stepsData = readJson('steps.json');
    const steps = [];
    stepsData.forEach(s => steps.push([nextId('process_steps'), s.number, s.title, s.description, s.icon]));
    writeCsv('process_steps.csv', ['id', 'step_number', 'title', 'description', 'icon'], steps);

    // 9. how-it-works.json
    const hiwData = readJson('how-it-works.json');
    const hiw = [];
    hiwData.forEach(h => hiw.push([h.id, h.title, h.description, h.icon, h.technicalDetail, h.detailedBreakdown]));
    writeCsv('how_it_works_steps.csv', ['id', 'title', 'description', 'icon', 'technical_detail', 'detailed_breakdown'], hiw);

    // 10. onboarding.json
    const obData = readJson('onboarding.json');
    const obs = [];
    obData.forEach(o => obs.push([nextId('onboarding_steps'), o.step, o.title, o.description, o.duration, o.status]));
    writeCsv('onboarding_steps.csv', ['id', 'step_number', 'title', 'description', 'duration', 'status'], obs);

    // 11. comparison.json
    const compData = readJson('comparison.json');
    const comps = [];
    compData.forEach(c => comps.push([nextId('comparisons'), c.feature, c.us, c.competitorA, c.competitorB]));
    writeCsv('comparisons.csv', ['id', 'feature', 'us_value', 'competitor_a_value', 'competitor_b_value'], comps);

    // 12. partners.json
    const partData = readJson('partners.json');
    const parts = [];
    partData.forEach(p => parts.push([nextId('partners'), p.name, p.logo]));
    writeCsv('partners.csv', ['id', 'name', 'logo_url'], parts);

    // 13. contact.json
    const contactData = readJson('contact.json');
    writeCsv('contact_info.csv', ['id', 'hero_title', 'hero_subtitle'], [[1, contactData.hero.title, contactData.hero.subtitle]]);
    
    const cMethods = [];
    contactData.contactMethods.forEach(c => cMethods.push([nextId('contact_methods'), c.id, c.title, c.desc, c.email, c.phone, c.icon]));
    writeCsv('contact_methods.csv', ['id', 'slug', 'title', 'description', 'email', 'phone', 'icon'], cMethods);
    
    const offices = [];
    contactData.offices.forEach(o => offices.push([nextId('offices'), o.city, o.role, o.address, o.timezone]));
    writeCsv('offices.csv', ['id', 'city', 'role', 'address', 'timezone'], offices);
    
    const socials = [];
    contactData.socials.forEach(s => socials.push([nextId('social_links'), s.name, s.url]));
    writeCsv('social_links.csv', ['id', 'name', 'url'], socials);

    // 14. siteConfig.json
    const scData = readJson('siteConfig.json');
    writeCsv('site_config.csv', ['id', 'company_name', 'tagline', 'contact_email', 'phone', 'address', 'year'], [
        [1, scData.companyName, scData.tagline, scData.contactEmail, scData.phone, scData.address, scData.year]
    ]);

    // 15. features.json
    const featData = readJson('features.json');
    const fCatMap = {};
    const fCats = [];
    featData.categories.forEach(c => {
        const id = nextId('feature_categories');
        fCatMap[c] = id;
        fCats.push([id, c]);
    });
    writeCsv('feature_categories.csv', ['id', 'name'], fCats);
    
    const features = [];
    featData.items.forEach(f => features.push([f.id, fCatMap[f.category] || 1, f.title, f.details, f.icon]));
    writeCsv('features.csv', ['id', 'category_id', 'title', 'details', 'icon'], features);

    // 16. solutions.json
    const solData = readJson('solutions.json');
    const solutions = [];
    solData.forEach(s => solutions.push([nextId('solutions'), s.id, s.title, s.focus, s.description, s.image]));
    writeCsv('solutions.csv', ['id', 'slug', 'title', 'focus', 'description', 'image_url'], solutions);

    // 17. docs.json
    const docData = readJson('docs.json');
    const docCats = [];
    const docArts = [];
    docData.categories.forEach(c => {
        const cId = nextId('doc_categories');
        docCats.push([cId, c.id, c.title, c.icon]);
        c.articles.forEach(a => docArts.push([nextId('doc_articles'), cId, a.id, a.title, a.content]));
    });
    writeCsv('doc_categories.csv', ['id', 'slug', 'title', 'icon'], docCats);
    writeCsv('doc_articles.csv', ['id', 'category_id', 'slug', 'title', 'content'], docArts);

    // 18. support.json
    const supData = readJson('support.json');
    writeCsv('support_info.csv', ['id', 'sla_uptime', 'sla_response_time', 'sla_commitment'], [[1, supData.sla.uptime, supData.sla.responseTime, supData.sla.commitment]]);
    
    const supTiers = [];
    const supFeats = [];
    supData.tiers.forEach(t => {
        const tId = nextId('support_tiers');
        supTiers.push([tId, t.id, t.icon, t.title, t.description, t.link, t.linkText]);
        t.features.forEach(f => supFeats.push([nextId('support_tier_features'), tId, f]));
    });
    writeCsv('support_tiers.csv', ['id', 'slug', 'icon', 'title', 'description', 'link_url', 'link_text'], supTiers);
    writeCsv('support_tier_features.csv', ['id', 'tier_id', 'feature_text'], supFeats);
    
    const sysStats = [];
    supData.systemStatus.forEach(s => sysStats.push([nextId('system_statuses'), s.label, s.status, s.color]));
    writeCsv('system_statuses.csv', ['id', 'label', 'status', 'color_hex'], sysStats);

    // 19. product.json
    const prodData = readJson('product.json');
    const pId = 1;
    writeCsv('products.csv', ['id', 'hero_title', 'hero_subtitle', 'whatis_title', 'whatis_description', 'whatis_def', 'whyus_title', 'whyus_description', 'cta_title', 'cta_subtitle', 'cta_primary_btn', 'cta_secondary_btn'], [
        [pId, prodData.hero.title, prodData.hero.subtitle, prodData.whatIs.title, prodData.whatIs.description, prodData.whatIs.educationErpDef, prodData.whyUs.title, prodData.whyUs.description, prodData.cta.title, prodData.cta.subtitle, prodData.cta.primaryButton, prodData.cta.secondaryButton]
    ]);
    
    const pLife = [];
    prodData.lifecycleMastery.steps.forEach(s => pLife.push([nextId('product_lifecycle_steps'), pId, s.title, s.desc]));
    writeCsv('product_lifecycle_steps.csv', ['id', 'product_id', 'title', 'description'], pLife);
    
    const pOps = [];
    prodData.operationsExcellence.pillars.forEach(p => pOps.push([nextId('product_operations_pillars'), pId, p.label]));
    writeCsv('product_operations_pillars.csv', ['id', 'product_id', 'label'], pOps);
    
    const pDeps = [];
    pDeps.push([nextId('product_deployments'), pId, 'saas', prodData.deployment.saas.title, prodData.deployment.saas.description]);
    pDeps.push([nextId('product_deployments'), pId, 'onPremise', prodData.deployment.onPremise.title, prodData.deployment.onPremise.description]);
    writeCsv('product_deployments.csv', ['id', 'product_id', 'type_slug', 'title', 'description'], pDeps);
    
    const pChal = [];
    prodData.whyNeed.challenges.forEach(c => pChal.push([nextId('product_challenges'), pId, c.problem, c.solution, c.details]));
    writeCsv('product_challenges.csv', ['id', 'product_id', 'problem', 'solution', 'details'], pChal);
    
    const pBen = [];
    prodData.benefits.points.forEach(b => pBen.push([nextId('product_benefits'), pId, b.title, b.desc]));
    writeCsv('product_benefits.csv', ['id', 'product_id', 'title', 'description'], pBen);
    
    const pCloud = [];
    prodData.cloudBenefits.forEach(b => pCloud.push([nextId('product_cloud_benefits'), pId, b]));
    writeCsv('product_cloud_benefits.csv', ['id', 'product_id', 'benefit_text'], pCloud);
    
    const pMods = [];
    prodData.modules.forEach(m => pMods.push([nextId('product_modules'), pId, m]));
    writeCsv('product_modules.csv', ['id', 'product_id', 'module_name'], pMods);
    
    const pFeats = [];
    prodData.features.forEach(f => pFeats.push([nextId('product_features'), pId, f]));
    writeCsv('product_features.csv', ['id', 'product_id', 'feature_name'], pFeats);
    
    const pScale = [];
    for (const [key, val] of Object.entries(prodData.scale)) {
        pScale.push([nextId('product_scales'), pId, key, val]);
    }
    writeCsv('product_scales.csv', ['id', 'product_id', 'metric_name', 'metric_value'], pScale);

    console.log("All 47 CSV files generated successfully.");

} catch (err) {
    console.error("Error generating CSVs:", err);
}

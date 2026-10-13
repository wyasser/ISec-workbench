// CBE Cyber Compliance Workbench - control library v2
// Structure: the 5 functions and 23 domains of the CBE Egypt Financial Cybersecurity Framework.
// Each domain is assessed across People, Process and Technology, as the framework does.
// Requirement texts are paraphrased assessment statements, NOT official CBE wording.
// Mappings: ISO/IEC 27001:2022 Annex A / clauses, NIST CSF 2.0 categories, CIS Controls v8 (top-level control number).
// Validate against the official CBE framework text before regulatory use; a second edition is in preparation.
window.CBE_LIBRARY_VERSION = "cbe-2";

window.CBE_FUNCTIONS = [
  ["GOV", "Governance"],
  ["CRM", "Cyber risk management"],
  ["CTO", "Cybersecurity technology & operations"],
  ["CD",  "Cyber defence"],
  ["OVM", "Outsourcing, vendors & resilience"]
];

// [id, function, name, objective]
window.CBE_DOMAINS = [
  ["GOV-1", "GOV", "Leadership, governance and strategy", "Board and senior management set direction, appetite and resources for cybersecurity and oversee its delivery."],
  ["GOV-2", "GOV", "Roles, responsibilities and HR security", "Cybersecurity accountabilities are clear and people are vetted, competent and managed securely through employment."],
  ["GOV-3", "GOV", "Compliance and regulatory reporting", "Legal, regulatory and scheme obligations are known, met and reported to the CBE and other authorities."],
  ["GOV-4", "GOV", "Security awareness and training", "Staff, management, third parties and customers understand cyber risks and their responsibilities."],
  ["CRM-1", "CRM", "Risk assessment and management", "Cyber risks are identified, assessed, treated and monitored within the bank's enterprise risk framework."],
  ["CRM-2", "CRM", "Asset management", "All information assets are known, owned, classified by criticality and managed through their lifecycle."],
  ["CTO-1", "CTO", "Identity and access management", "Only authorised identities get the minimum access they need, with privileged access tightly controlled."],
  ["CTO-2", "CTO", "Data protection and privacy", "Customer, business and personal data keep their confidentiality, integrity and availability, in line with banking secrecy and PDPL."],
  ["CTO-3", "CTO", "Cryptography", "Cryptography protects data and transactions with approved algorithms and well-managed keys."],
  ["CTO-4", "CTO", "Application security", "Business applications are designed, built, acquired and maintained securely across their lifecycle."],
  ["CTO-5", "CTO", "Digital channels security", "Internet, mobile, card and API channels resist abuse, fraud and account takeover."],
  ["CTO-6", "CTO", "Network security", "Networks are segmented, monitored and protected, and only authorised endpoints and traffic are allowed."],
  ["CTO-7", "CTO", "Endpoint security", "Servers, workstations, mobile devices, ATMs and POS are hardened and protected against malware and misuse."],
  ["CTO-8", "CTO", "Email security", "Email and web browsing are protected against phishing, malware, spoofing and data leakage."],
  ["CTO-9", "CTO", "Vulnerability and patch management", "Vulnerabilities are found, prioritised and fixed within risk-based timeframes."],
  ["CTO-10", "CTO", "Physical and environmental security", "Facilities, data centres and equipment are protected from unauthorised access and environmental threats."],
  ["CTO-11", "CTO", "Cloud security", "Cloud services are adopted with CBE-compliant approval and secured under a clear shared-responsibility model."],
  ["CTO-12", "CTO", "Change management", "Changes to systems are assessed, tested, approved and traceable, and unauthorised changes are detected."],
  ["CD-1", "CD", "Security operations, threat intelligence and insider threat", "Threats are detected and analysed continuously, informed by intelligence, including threats from insiders."],
  ["CD-2", "CD", "Incident management", "Cyber incidents are contained, eradicated, recovered from, reported and learned from."],
  ["OVM-1", "OVM", "Outsourcing and vendor management", "Third parties and outsourced services meet the bank's cybersecurity requirements throughout the relationship."],
  ["OVM-2", "OVM", "Business resilience", "Critical banking services can withstand and recover from disruptive and destructive cyber events."],
  ["OVM-3", "OVM", "Cybersecurity testing", "Controls are tested independently and realistically, and findings are fixed."]
];

// [id, type, title, requirement, ISO 27001:2022, NIST CSF 2.0, CIS v8, expected evidence]
const RAW = {
"GOV-1": [
 ["Pr","Board-approved cybersecurity strategy","A cybersecurity strategy aligned with the bank's business strategy, digital plans and risk appetite is approved by the board and reviewed at least annually.","Cl. 5.1, 6.2","GV.OC, GV.RM","","Strategy document, board approval minutes, review history"],
 ["Pr","Board cyber oversight","A board committee (risk, audit or IT governance) formally oversees cyber risk and receives periodic reporting on posture, KRIs, major incidents and programme delivery.","Cl. 5.1, 9.3","GV.OV","","Committee charter, minutes, cyber reporting packs"],
 ["Pr","Management cybersecurity committee","A management-level cybersecurity or IT risk committee with a documented charter meets regularly to steer the programme and resolve cross-functional issues.","Cl. 5.1, A.5.4","GV.RR","","Charter, membership, meeting minutes and action log"],
 ["Pr","Cybersecurity policy framework","A cybersecurity policy and supporting standards covering all framework domains are approved, published, communicated and reviewed at least annually.","A.5.1","GV.PO","","Policy set, approval records, review log, communication evidence"],
 ["Pr","Cyber risk appetite","The board has approved a cyber risk appetite statement with measurable tolerances and key risk indicators.","Cl. 6.1","GV.RM","","Risk appetite statement, KRI definitions and thresholds"],
 ["Pr","Budget and resourcing","Cybersecurity has a dedicated, approved budget and headcount plan that is tracked and sized to the strategy.","Cl. 7.1","GV.RR","","Approved budget, headcount plan, spend tracking"],
 ["Pr","Three lines of defence","Cyber risk ownership sits in the first line, independent oversight in the second line (risk or CISO) and assurance in the third line (internal audit).","A.5.2, Cl. 9.2","GV.RR, GV.OV","","Governance model, role descriptions, audit plan"],
 ["Pr","Programme roadmap","A multi-year cybersecurity roadmap with funded initiatives and milestones is tracked and progress is reported to management and the board.","Cl. 6.2, 9.1","GV.OV","","Roadmap, status reports, milestone tracking"],
 ["P","Board cyber competence","Board members receive cybersecurity briefings or training at least annually, and the board has access to cyber expertise.","Cl. 7.2","GV.RR, PR.AT","14","Board training records, briefing materials"],
 ["Pr","Security architecture principles","Approved enterprise security architecture principles (such as defence in depth, zero trust and secure by design) guide technology decisions.","A.8.27","GV.PO, PR.IR","","Architecture principles, architecture review records"]
],
"GOV-2": [
 ["P","Independent CISO function","A CISO with defined authority, adequate resources and a reporting line independent of IT operations leads the cybersecurity function.","A.5.2","GV.RR","","CISO mandate, organisation chart, reporting line"],
 ["Pr","Cybersecurity RACI","Cybersecurity responsibilities across business, IT, security, risk and audit are defined in a RACI and kept current.","A.5.2","GV.RR","","RACI matrix, job descriptions"],
 ["Pr","Segregation of duties","Conflicting duties are segregated across business, IT and security roles, including development and production, and security administration and operations.","A.5.3","PR.AA","6","SoD matrix, conflict rules, exception approvals"],
 ["P","Cyber staffing and competence","The cybersecurity team has the skills, certifications and capacity the strategy needs, with a training plan and succession for key roles.","Cl. 7.2, A.6.3","GV.RR, PR.AT","","Skills matrix, training plan, succession plan"],
 ["P","Pre-employment screening","Background screening proportional to role sensitivity is completed before hiring staff and contractors, and repeated for sensitive roles.","A.6.1","GV.RR","","Screening procedure, sample screening records"],
 ["P","Terms of employment and confidentiality","Employment contracts include security and banking secrecy obligations; staff sign confidentiality and acceptable use agreements.","A.6.2, A.6.6, A.5.10","GV.RR","","Contract template, signed NDAs and acknowledgements"],
 ["Pr","Movers and leavers","Access is adjusted on role change and revoked on termination within defined timeframes (same day for privileged users), and assets are returned.","A.6.5, A.5.11","PR.AA","5, 6","Leaver checklist, HR-to-IT reconciliation, sample tickets"],
 ["Pr","Disciplinary process","A formal disciplinary process covers security policy violations and is applied consistently.","A.6.4","GV.RR","","Disciplinary policy, case log (anonymised)"],
 ["Pr","Sensitive role controls","Staff in sensitive roles (treasury, payments, privileged IT) are subject to mandatory leave, rotation or enhanced monitoring.","A.5.3, A.6.1","GV.RR","","Sensitive role list, mandatory leave records"],
 ["P","Third-party personnel security","Contractors and vendor staff with access are screened, bound by confidentiality, trained and offboarded like employees.","A.6.1, A.5.20","GV.SC, GV.RR","15","Contractor onboarding records, access reviews"]
],
"GOV-3": [
 ["Pr","Regulatory obligations register","Applicable obligations are tracked with owners, including CBE instructions, Banking Law 194/2020, PDPL 151/2020, Anti-Cybercrime Law 175/2018, PCI DSS and SWIFT CSCF.","A.5.31","GV.OC","","Obligations register, owner assignments, review dates"],
 ["Pr","Reporting to the CBE","Required cybersecurity self-assessments, periodic reports and notifications are submitted to the CBE accurately and on time.","A.5.31, A.5.5","GV.OC","","Submission log, copies of submissions, CBE correspondence"],
 ["Pr","Regulatory change management","New CBE circulars and regulations are monitored, gap-assessed and implemented on a tracked plan.","A.5.31","GV.OC","","Regulatory watch log, gap assessments, implementation plans"],
 ["Pr","Compliance monitoring","Compliance with cybersecurity policies and standards is monitored by the second line, and results are reported.","A.5.36","GV.OV, ID.IM","","Compliance monitoring plan, reports"],
 ["Pr","Policy exceptions","Exceptions to policy are risk-assessed, approved at an appropriate level, time-bound, and have compensating controls.","A.5.36","GV.RM","","Exception register, approvals, expiry tracking"],
 ["Pr","Findings tracking","Findings from the CBE, internal audit, external audit and testing are tracked to closure, and overdue items are escalated to the board.","Cl. 10.2","ID.IM","","Findings tracker, aging report, board reporting"],
 ["Pr","PCI DSS compliance","The cardholder data environment is validated against PCI DSS annually, with a current report on compliance or attestation.","A.5.31","GV.OC","","PCI DSS ROC/AOC, scope document"],
 ["Pr","SWIFT CSCF attestation","SWIFT Customer Security Controls Framework mandatory controls are implemented, independently assessed, and attested annually.","A.5.31","GV.OC","","KYC-SA attestation, independent assessment report"],
 ["Pr","Contact with authorities and sector groups","The bank keeps contacts with the CBE, EG-CERT and EG-FinCIRT, and takes part in sector information sharing.","A.5.5, A.5.6","GV.OC, ID.RA","","Contact list, membership evidence, sharing records"]
],
"GOV-4": [
 ["P","Annual awareness for all staff","All staff complete cybersecurity awareness training at least annually, with completion tracked and escalated.","A.6.3","PR.AT","14","Training content, completion reports"],
 ["P","Onboarding training","New staff complete security awareness training before or immediately after receiving system access.","A.6.3","PR.AT","14","Onboarding curriculum, completion records"],
 ["P","Phishing simulations","Phishing and social engineering simulations run at least quarterly, and repeat failures receive targeted follow-up.","A.6.3","PR.AT","14","Simulation results, follow-up training records"],
 ["P","Role-based training","Privileged users, developers, SOC analysts and payment operators receive role-specific security training.","A.6.3","PR.AT","14, 16","Role curricula, attendance records"],
 ["P","Executive awareness","Senior management and the board receive tailored awareness on threats targeting banks and executives (for example business email compromise and whaling).","A.6.3","PR.AT","14","Executive session materials, attendance"],
 ["P","Customer awareness","Customers receive regular fraud and security awareness messaging through digital channels, branches and media.","A.6.3","PR.AT","","Campaign materials, channel calendar"],
 ["Pr","Awareness effectiveness","Awareness programme effectiveness is measured (for example reporting rates and click rates) and used to improve content.","A.6.3, Cl. 9.1","PR.AT, ID.IM","14","Awareness metrics, programme review"],
 ["P","Third-party awareness","Third-party staff with access to bank systems complete the bank's security awareness requirements.","A.6.3, A.5.20","PR.AT, GV.SC","14","Third-party training records"]
],
"CRM-1": [
 ["Pr","Cyber risk methodology","A documented cyber risk methodology, integrated with enterprise risk management, defines likelihood, impact, scoring and risk appetite thresholds.","Cl. 6.1.2","GV.RM, ID.RA","","Methodology, ERM linkage"],
 ["Pr","Periodic risk assessment","Cyber risks are assessed at least annually and on significant change, covering critical services, assets and threats.","Cl. 8.2","ID.RA","","Risk assessment reports"],
 ["Pr","Cyber risk register","Cyber risks are recorded in a register with owners, ratings, controls and treatment status.","Cl. 6.1.2","ID.RA","","Risk register extract"],
 ["Pr","Risk treatment plans","Each risk above appetite has an approved treatment plan with an owner, actions and target dates, and progress is tracked.","Cl. 6.1.3, 8.3","ID.RA, GV.RM","","Treatment plans, progress tracking"],
 ["Pr","Risk acceptance","Residual risks above tolerance are formally accepted at the authorised level, time-bound and periodically re-reviewed.","Cl. 6.1.3","GV.RM","","Risk acceptance forms, approval matrix"],
 ["Pr","Risk assessment of new initiatives","New products, channels, systems, vendors and major changes undergo a cyber risk assessment before launch.","A.5.8","ID.RA","","Pre-launch assessments, sign-offs"],
 ["Pr","Threat-informed scenarios","Risk assessments use threat intelligence and bank-relevant scenarios such as ransomware, payment fraud, DDoS and insider abuse.","A.5.7","ID.RA","","Scenario library, threat inputs to assessments"],
 ["Pr","Key risk indicators","Cyber KRIs are measured against thresholds and breaches are escalated to management and the board.","Cl. 9.1","GV.RM, GV.OV","","KRI dashboard, escalation records"]
],
"CRM-2": [
 ["T","Hardware asset inventory","A complete, current inventory covers servers, end-user devices, network and security devices, ATMs, POS and OT/IoT devices.","A.5.9","ID.AM","1","CMDB extract, discovery reconciliation"],
 ["T","Software asset inventory","An inventory of installed software, versions and licences is maintained for all systems.","A.5.9","ID.AM","2","Software inventory, licence records"],
 ["Pr","Data and data-flow inventory","Sensitive data stores and data flows (customer, card, payment and personal data) are identified and documented.","A.5.9, A.5.12","ID.AM","3","Data inventory, data-flow diagrams"],
 ["Pr","Cloud and SaaS inventory","All cloud and SaaS services in use, including shadow IT, are inventoried with owners and data classification.","A.5.9, A.5.23","ID.AM","1, 2","Cloud service inventory, CASB discovery report"],
 ["Pr","Asset ownership","Every asset has an accountable owner responsible for its protection and classification.","A.5.9","ID.AM","1","Ownership assignments in CMDB"],
 ["Pr","Criticality classification","Assets are rated by criticality and sensitivity, and the critical assets supporting core banking, payments and digital channels are identified.","A.5.12","ID.AM","3","Criticality ratings, critical asset list"],
 ["T","Unauthorised asset detection","Automated discovery detects unauthorised hardware and software, which is removed or approved within a defined time.","A.8.19","ID.AM, DE.CM","1, 2","Discovery tool reports, remediation tickets"],
 ["Pr","End-of-life technology","Unsupported or end-of-life systems are identified, risk-assessed, isolated where needed and on a replacement plan.","A.8.8","ID.AM, ID.RA","2","EOL register, replacement plan, compensating controls"],
 ["Pr","Acceptable use and return of assets","Acceptable use rules are acknowledged by users, and assets are returned on termination.","A.5.10, A.5.11","ID.AM","","Acceptable use policy, return records"]
],
"CTO-1": [
 ["Pr","Access control policy","An access control policy based on least privilege and need-to-know covers all systems, users and access types.","A.5.15","PR.AA","6","Access control policy"],
 ["Pr","Joiner-mover-leaver process","Access is provisioned only on approved requests, adjusted on role change and revoked on exit within defined timeframes.","A.5.16, A.5.18","PR.AA","5, 6","JML procedure, sample tickets, HR reconciliation"],
 ["Pr","Periodic access reviews","Business and system owners recertify access at least quarterly for privileged and critical-system access, and at least semi-annually otherwise.","A.5.18","PR.AA","6","Review evidence, revocations made"],
 ["T","Unique identities","Every user has a unique ID; shared and generic accounts are prohibited or tightly controlled with individual accountability.","A.5.16","PR.AA","5","Account listings, generic account register"],
 ["T","Authentication standard","Password and authentication settings (length, complexity, history, lockout and session timeout) meet the bank's standard on all systems.","A.5.17, A.8.5","PR.AA","5","Configuration screenshots or exports"],
 ["T","Multi-factor authentication","MFA is enforced for remote access, all privileged access, email, cloud consoles, and access to payment and critical systems.","A.8.5","PR.AA","6","IdP configuration, MFA coverage report"],
 ["T","Privileged access management","Privileged access goes through a PAM solution with heightened visibility, credential management, MFA and alerting.","A.8.2","PR.AA","5, 6","PAM architecture, onboarded account coverage"],
 ["T","Password vaulting","Privileged and local admin passwords are vaulted, randomised, rotated after use or periodically, and integrated with the SIEM.","A.8.2, A.5.17","PR.AA","5","Vault configuration, rotation reports"],
 ["T","Privileged session recording","Privileged and high-risk sessions are recorded, recordings are protected from tampering, and samples are reviewed.","A.8.2, A.8.15","PR.AA, DE.CM","8","Recording configuration, review records"],
 ["Pr","Minimal standing privilege","Standing administrative rights are minimised through just-in-time elevation and time-bound approvals.","A.8.2","PR.AA","6","JIT configuration, privileged account count trend"],
 ["T","Service account management","Service and application accounts are inventoried, owned, non-interactive where possible, rotated, and never stored in source code or config files.","A.5.17, A.8.2","PR.AA","5","Service account register, rotation evidence, secrets scan"],
 ["T","Centralised identity and federation","Identities are centrally managed and federated (SSO) to eliminate local accounts and shared credentials where possible.","A.5.16","PR.AA","5, 6","IdP integration list, local account inventory"],
 ["T","Jump hosts for administration","Administration of critical systems happens only from hardened jump hosts or privileged access workstations.","A.8.2, A.8.22","PR.AA, PR.IR","12","Jump host design, firewall rules"],
 ["Pr","Default and emergency accounts","Default accounts are disabled or renamed; break-glass accounts are sealed, monitored and reviewed after every use.","A.5.17, A.8.2","PR.AA","5","Default account checks, break-glass log"],
 ["T","Application SoD enforcement","Core banking and payment applications enforce maker-checker and SoD rules in their role design.","A.5.3, A.8.3","PR.AA","6","Role matrix, SoD conflict report"]
],
"CTO-2": [
 ["Pr","Data classification scheme","A classification scheme (for example public, internal, confidential, secret) with handling rules covers customer, card and bank data.","A.5.12","ID.AM","3","Classification policy"],
 ["Pr","Labelling and handling","Documents and data are labelled by classification, and handling rules apply to storage, sharing, printing and disposal.","A.5.13","PR.DS","3","Labelling tool configuration, samples"],
 ["T","Data loss prevention","DLP monitors and blocks leakage of sensitive data over email, web, endpoints, removable media and cloud services.","A.8.12","PR.DS","3","DLP policies, incident reports, coverage"],
 ["T","Removable media control","Removable media is blocked by default; approved use is encrypted and logged.","A.7.10, A.8.12","PR.DS","3, 10","Device control policy, exceptions"],
 ["T","Database activity monitoring","Critical databases are monitored for fraudulent, illegal or other undesirable activity, including privileged queries.","A.8.15, A.8.16","DE.CM","8","DAM coverage, alert samples"],
 ["T","Data masking","Sensitive data (for example PAN and national ID) is masked in displays, reports and non-production environments.","A.8.11, A.8.33","PR.DS","3","Masking configuration, non-prod data samples"],
 ["Pr","Banking secrecy","Access to customer account information is restricted and logged to protect confidentiality under Banking Law 194/2020.","A.5.34, A.8.3","PR.DS, PR.AA","3, 6","Access logs, access rules for customer data"],
 ["Pr","PDPL governance","A data protection officer is appointed and the bank holds the licences or registrations PDPL 151/2020 requires.","A.5.34","GV.OC","","DPO appointment, licences or registrations"],
 ["Pr","Lawful processing and consent","Each processing activity has a documented lawful basis; consent, where used, is recorded and can be withdrawn.","A.5.34","GV.OC","","Consent records, privacy notices"],
 ["Pr","Records of processing","A register of processing activities records purposes, data categories, retention periods and recipients.","A.5.34","ID.AM","3","Processing register"],
 ["Pr","Data subject rights","Access, correction, erasure and objection requests are handled within defined timelines.","A.5.34","GV.OC","","Procedure, request log"],
 ["Pr","Cross-border data transfer","Personal and banking data leaves Egypt only under the conditions, approvals and licences the law and the CBE require.","A.5.14, A.5.34","GV.OC","3","Transfer register, approvals, contracts"],
 ["Pr","Personal data breach notification","Personal data breaches are notified to the Personal Data Protection Centre within 72 hours, and to affected individuals where required.","A.5.26, A.5.34","RS.CO","17","Procedure, templates, notification log"],
 ["Pr","Retention and secure deletion","Retention periods are defined and data is securely deleted at end of retention.","A.5.33, A.8.10","PR.DS","3","Retention schedule, deletion records"],
 ["T","Secure information transfer","Data exchanged with customers, partners and authorities uses secure, authenticated and encrypted channels.","A.5.14","PR.DS","3","Transfer agreements, SFTP/API configuration"]
],
"CTO-3": [
 ["Pr","Cryptography standard","An approved standard defines permitted algorithms, key lengths and protocols, and prohibits weak ones.","A.8.24","PR.DS","3","Cryptography standard"],
 ["T","Encryption in transit","Sensitive data is encrypted in transit with TLS 1.2 or higher, and weak ciphers and protocols are disabled.","A.8.24","PR.DS","3","TLS scan results, configuration"],
 ["T","Encryption at rest","Sensitive data in databases, file stores, endpoints and backups is encrypted at rest.","A.8.24","PR.DS","3","Encryption configuration, coverage report"],
 ["Pr","Key management lifecycle","Keys are generated, distributed, stored, rotated, revoked and destroyed under a documented lifecycle.","A.8.24","PR.DS","3","Key management procedure, key inventory"],
 ["T","HSMs for payment keys","Payment, PIN and card keys are generated and stored in certified HSMs under dual control and split knowledge.","A.8.24","PR.DS","3","HSM certificates, key ceremony records"],
 ["T","Certificate management","Digital certificates are inventoried, issued from trusted CAs, and monitored for expiry and misuse.","A.8.24","PR.DS","3","Certificate inventory, expiry alerts"],
 ["T","Secrets management","Application secrets, API keys and connection strings are stored in a secrets vault, not in code or config files.","A.8.24, A.5.17","PR.DS, PR.AA","16","Vault configuration, secrets scan results"],
 ["Pr","Crypto inventory and agility","An inventory of cryptographic usage supports rapid algorithm change, including planning for post-quantum migration.","A.8.24","ID.AM, PR.DS","","Crypto inventory, migration plan"]
],
"CTO-4": [
 ["Pr","Secure SDLC","A secure development lifecycle defines security activities and gates from requirements through deployment.","A.8.25","PR.PS","16","SDLC policy, gate evidence"],
 ["Pr","Security requirements and threat modelling","Security requirements are defined at design, and critical applications are threat-modelled.","A.8.26, A.8.27","PR.PS","16","Requirements templates, threat models"],
 ["P","Secure coding","Developers follow secure coding standards (such as OWASP) and receive secure coding training.","A.8.28","PR.PS, PR.AT","16","Coding standard, training records"],
 ["T","Static and dynamic testing","SAST, DAST and code review run before release, and critical or high findings block deployment.","A.8.29","PR.PS","16","Scan reports, release gate configuration"],
 ["T","Open-source and dependency security","Third-party components are scanned (SCA), an SBOM is kept, and vulnerable dependencies are remediated.","A.8.28, A.5.21","ID.RA, PR.PS","16","SCA reports, SBOM"],
 ["T","Environment separation","Development, test and production are separated, and production data is not used in test without masking.","A.8.31, A.8.33","PR.IR","16","Environment diagram, masking evidence"],
 ["T","Source code protection","Source repositories enforce access control, MFA, branch protection and review of changes.","A.8.4","PR.AA, PR.PS","16","Repository settings, access lists"],
 ["T","Secure CI/CD pipeline","Build pipelines are hardened, secrets-scanned and produce traceable, integrity-protected artefacts.","A.8.25, A.8.32","PR.PS","16","Pipeline configuration, artefact signing"],
 ["Pr","Third-party and vendor software","Acquired or outsourced software (including core banking) must meet security requirements, is tested before go-live, and vendor patches are tracked.","A.8.30, A.5.21","GV.SC, PR.PS","16","Vendor security requirements, acceptance tests"],
 ["T","Application security baseline","Web and API applications meet a baseline (such as OWASP ASVS) for input validation, error handling, session management and logging.","A.8.26","PR.PS","16","Baseline, verification results"]
],
"CTO-5": [
 ["T","Strong customer authentication","Internet and mobile banking require multi-factor authentication at login.","A.8.5","PR.AA","6","Authentication design, configuration"],
 ["T","Transaction signing","High-risk actions (new beneficiary, high-value transfer, profile change) need out-of-band confirmation or transaction signing.","A.8.5","PR.AA","","Transaction signing design, rule list"],
 ["T","Device binding","Customer devices are registered and bound, and new-device activations are verified and notified.","A.8.5","PR.AA","","Device binding flow, notification samples"],
 ["T","Mobile app protection","Mobile apps use obfuscation, root or jailbreak detection, certificate pinning, tamper detection and secure local storage.","A.8.26","PR.PS","16","Mobile pen test, MASVS results"],
 ["T","Real-time fraud monitoring","Real-time fraud monitoring with behavioural analytics covers digital channels, cards and instant payments.","A.8.16","DE.CM, DE.AE","","Fraud system rules, alert metrics, case handling"],
 ["T","Customer notifications","Customers are notified in real time of logins, transactions and security changes on their accounts.","A.8.16","DE.CM","","Notification configuration, samples"],
 ["T","Session and limit controls","Digital sessions time out and require re-authentication; transaction limits and velocity checks are enforced.","A.8.5","PR.AA","","Session settings, limit configuration"],
 ["T","API security","Open banking and partner APIs are inventoried, strongly authenticated, authorised per call, rate-limited and monitored.","A.8.26","PR.PS, DE.CM","16","API inventory, gateway policies, test reports"],
 ["T","Bot and credential-stuffing protection","Login and transaction endpoints are protected against bots, credential stuffing and enumeration.","A.8.20","PR.PS, DE.CM","13","Bot management configuration, attack metrics"],
 ["Pr","Brand and phishing monitoring","Fake apps, phishing sites and social media impersonation are monitored and taken down.","A.5.7","DE.CM","","Monitoring service reports, takedown log"],
 ["Pr","Pre-launch channel testing","New digital channels and major releases are penetration-tested before launch.","A.8.29","ID.RA","18","Pen test reports, launch approvals"],
 ["T","Channel platform privileged access","Privileged access to digital channel platforms is controlled through PAM with heightened visibility.","A.8.2","PR.AA","5, 6","PAM coverage for channel platforms"],
 ["T","Card security controls","Card payments use 3-D Secure, tokenisation and customer-controllable card settings.","A.8.24","PR.DS","","3-D Secure configuration, tokenisation design"]
],
"CTO-6": [
 ["Pr","Network architecture documentation","Network architecture and data-flow diagrams are current and reviewed at least annually.","A.8.20","ID.AM, PR.IR","12","Network diagrams, review record"],
 ["T","Network segmentation","The network is segmented into trust zones; core banking, card, payment and management networks are isolated.","A.8.22","PR.IR","12","Zone design, firewall policies"],
 ["Pr","Firewall rule management","Firewall rules are approved, documented, least-privilege and reviewed at least semi-annually.","A.8.20","PR.IR","4, 12","Rule review records, change tickets"],
 ["T","Intrusion prevention","IDS/IPS inspects traffic at the perimeter and between critical zones.","A.8.20, A.8.16","DE.CM","13","IPS deployment, signature update evidence"],
 ["T","Web application firewall","Internet-facing applications and APIs are protected by a WAF in blocking mode.","A.8.20","PR.IR","13","WAF policies, coverage list"],
 ["T","DDoS protection","Volumetric and application-layer DDoS protection covers internet-facing services.","A.8.20","PR.IR","13","DDoS service contract, test results"],
 ["T","Secure remote access","Remote access uses host-to-site VPN or ZTNA with MFA and device posture checks.","A.6.7, A.8.20","PR.AA, PR.IR","12, 13","VPN or ZTNA configuration"],
 ["T","Wireless security","Corporate wireless uses enterprise authentication and is segregated from guest and critical networks.","A.8.20","PR.IR","12","Wireless design, configuration"],
 ["T","Network device hardening","Network devices are hardened, use centralised TACACS+ or RADIUS authentication, and configurations are backed up.","A.8.9, A.8.20","PR.PS, PR.AA","4, 12","Hardening standard, AAA configuration"],
 ["T","Network access control","Only authorised and compliant devices can connect to the internal network.","A.8.20","PR.AA, PR.IR","1, 13","NAC policy, rejection logs"],
 ["T","DNS and web filtering","Protective DNS and web proxy filtering block access to malicious and unapproved destinations.","A.8.23","PR.PS, DE.CM","9","Filtering policy, block statistics"],
 ["T","Egress control","Outbound traffic from servers and critical zones is denied by default and allowed only to approved destinations.","A.8.20, A.8.22","PR.IR","12, 13","Egress rule set"],
 ["T","Payment infrastructure isolation","SWIFT and national payment system connectivity sits in a dedicated secure zone in line with SWIFT CSCF.","A.8.22","PR.IR","12","Secure zone architecture, CSCF evidence"],
 ["T","Network traffic monitoring","Network traffic (NetFlow or NDR) is monitored to detect lateral movement and anomalies.","A.8.16","DE.CM","13","NDR coverage, alert samples"]
],
"CTO-7": [
 ["T","EDR coverage","EDR is deployed on all servers and endpoints, with coverage monitored and alerts sent to the SOC.","A.8.7","DE.CM","10","EDR coverage report"],
 ["T","Anti-malware","Anti-malware with automatic updates protects all applicable systems.","A.8.7","DE.CM","10","Console status report"],
 ["T","Hardening baselines","Servers and endpoints are built from hardened images that follow approved baselines (such as CIS Benchmarks).","A.8.9","PR.PS","4","Baselines, compliance scan"],
 ["T","Application allowlisting","Critical servers, payment systems and ATMs run only explicitly permitted applications.","A.8.19","PR.PS","2","Allowlisting policy, coverage"],
 ["T","Local admin restriction","Users do not have local administrator rights, and exceptions are approved and monitored.","A.8.2, A.8.18","PR.AA","5","Local admin report, exceptions"],
 ["T","Device control","USB and peripheral devices are controlled by policy.","A.7.10","PR.PS","10","Device control policy"],
 ["T","Host firewall","Host-based firewalls are enabled and centrally managed.","A.8.20","PR.IR","4","GPO or MDM configuration"],
 ["T","Endpoint encryption","Laptops and portable devices use full-disk encryption.","A.8.1, A.8.24","PR.DS","3","Encryption compliance report"],
 ["T","Mobile device management","Corporate and BYOD mobile devices accessing bank data are enrolled in MDM or MAM with enforced security policies.","A.8.1","PR.PS","4","MDM policies, enrolment report"],
 ["T","ATM and kiosk security","ATMs and kiosks are hardened, use allowlisting, disk encryption, BIOS protection and anti-skimming, and are monitored.","A.8.1, A.7.8","PR.PS, DE.CM","4","ATM hardening standard, monitoring evidence"],
 ["T","POS terminal security","POS terminals are certified, securely managed, and tracked against tampering.","A.8.1","PR.PS","1","POS inventory, tamper checks"],
 ["T","File integrity monitoring","File and configuration integrity monitoring on critical systems detects unauthorised changes and alerts the SOC.","A.8.9","DE.CM","4, 8","FIM coverage, alert samples"],
 ["T","Virtualisation and server platform security","Hypervisors, container platforms and management consoles are hardened, patched and access-restricted.","A.8.9","PR.PS","4","Platform hardening evidence"]
],
"CTO-8": [
 ["T","Secure email gateway","Email gateways filter spam, malware and phishing.","A.8.7","PR.PS, DE.CM","9","Gateway configuration, detection metrics"],
 ["T","Sandboxing and URL protection","Attachments are sandboxed and URLs are rewritten and checked at click time.","A.8.7","DE.CM","9","Sandbox and URL protection configuration"],
 ["T","Email authentication","SPF, DKIM and DMARC with a reject or quarantine policy protect the bank's domains, including parked domains.","A.8.21","PR.PS","9","DNS records, DMARC reports"],
 ["T","External email tagging and reporting","External emails are tagged, and users can report suspected phishing with one click for SOC triage.","A.8.7, A.6.8","DE.CM, PR.AT","9","Tagging configuration, report metrics"],
 ["T","Email encryption","Email in transit uses TLS, and sensitive content uses message encryption.","A.8.24","PR.DS","3","TLS configuration, encryption tool"],
 ["T","Auto-forwarding restriction","Automatic forwarding to external domains is blocked or tightly controlled.","A.8.12","PR.DS","9","Transport rules"],
 ["T","Browser protection","Browsers are centrally managed and hardened, with restricted extensions.","A.8.23","PR.PS","9","Browser policies"]
],
"CTO-9": [
 ["Pr","Vulnerability management process","A documented process defines scope, scanning frequency, prioritisation, remediation SLAs and reporting.","A.8.8","ID.RA","7","Vulnerability management procedure"],
 ["T","Vulnerability scanning","Authenticated scans cover all assets at least monthly, and internet-facing assets at least weekly.","A.8.8","ID.RA","7","Scan schedule, scan coverage reports"],
 ["Pr","Risk-based prioritisation","Fixes are prioritised by severity, exploitability (for example known-exploited lists) and asset criticality.","A.8.8","ID.RA","7","Prioritisation criteria, sample decisions"],
 ["Pr","Patch SLAs","Patches are applied within risk-based SLAs (for example critical within 14 days, sooner for internet-facing systems), and SLA performance is measured.","A.8.8","PR.PS","7","Patch SLA metrics"],
 ["Pr","Patch testing","Patches are tested before production deployment, with an emergency path for actively exploited vulnerabilities.","A.8.8, A.8.32","PR.PS","7","Test records, emergency patch records"],
 ["Pr","Vulnerability exceptions","Unpatched vulnerabilities beyond SLA are risk-accepted with compensating controls and expiry dates.","A.8.8","GV.RM","7","Exception register"],
 ["T","Configuration compliance scanning","Systems are scanned against secure configuration baselines, and deviations are fixed.","A.8.9","PR.PS","4","Compliance scan reports"],
 ["Pr","Vulnerability intelligence","Vendor advisories and threat intelligence on new vulnerabilities are monitored and acted upon.","A.8.8, A.5.7","ID.RA","7","Advisory tracking log"],
 ["Pr","Vulnerability metrics","Vulnerability and patch metrics are reported to management, with trends and overdue items.","Cl. 9.1","GV.OV","7","Monthly vulnerability report"]
],
"CTO-10": [
 ["T","Secure perimeters","Data centres and sensitive areas have defined secure perimeters with layered physical controls.","A.7.1, A.7.3","PR.AA","","Site security plans"],
 ["T","Physical access control","Entry to data centres uses badge plus a second factor, and physical access lists are reviewed at least quarterly.","A.7.2","PR.AA","","Access lists, review records"],
 ["T","CCTV and monitoring","CCTV covers critical areas, is monitored and footage is retained for a defined period.","A.7.4","DE.CM","","CCTV coverage, retention settings"],
 ["Pr","Visitor management","Visitors are registered, identified, escorted and logged in secure areas.","A.7.2","PR.AA","","Visitor logs"],
 ["T","Environmental protection","Fire suppression, UPS and generators, HVAC and water detection protect data centres and are tested periodically.","A.7.5, A.7.11","PR.IR","","Maintenance and test records"],
 ["Pr","Equipment maintenance","Equipment is maintained by authorised personnel, and remote maintenance is controlled.","A.7.13","PR.PS","","Maintenance records"],
 ["Pr","Secure disposal","Equipment and media are sanitised or destroyed before disposal or reuse, with certificates retained.","A.7.14, A.8.10","PR.DS","3","Disposal certificates"],
 ["Pr","Clear desk and clear screen","Clear desk and clear screen rules apply, and printed sensitive data is controlled.","A.7.7","PR.DS","","Policy, spot-check results"],
 ["T","Branch and ATM physical security","Branches, ATM sites and network rooms are physically secured and monitored.","A.7.1, A.7.8","PR.AA","","Branch security standard, inspection reports"]
],
"CTO-11": [
 ["Pr","Cloud policy and CBE approval","A cloud policy governs adoption, and material cloud use follows CBE requirements for approval or notification before go-live.","A.5.23","GV.PO, GV.SC","15","Cloud policy, CBE correspondence"],
 ["Pr","Cloud risk assessment","Each cloud service is risk-assessed, including what data classifications may be hosted.","A.5.23","ID.RA","15","Cloud risk assessments"],
 ["Pr","Data residency","Data location requirements are defined and enforced for each cloud service.","A.5.23, A.5.34","GV.OC","3","Region configuration, contracts"],
 ["Pr","Cloud provider assurance","Cloud providers are assessed on certifications and reports (such as ISO 27001, ISO 27017, ISO 27018 and SOC 2) and right to audit.","A.5.19, A.5.23","GV.SC","15","CSP assurance reports, due diligence"],
 ["Pr","Shared responsibility","Security responsibilities between the bank and each provider are documented and operated.","A.5.23","GV.SC, GV.RR","15","Responsibility matrix"],
 ["T","Cloud security posture management","CSPM continuously monitors cloud configurations for misconfiguration and risks.","A.8.9","DE.CM, PR.PS","4","CSPM reports, remediation tracking"],
 ["T","Cloud identity and privileged access","Cloud administration uses federated identity, MFA and PAM with heightened visibility.","A.8.2, A.8.5","PR.AA","5, 6","Cloud IAM configuration, PAM coverage"],
 ["T","Customer-managed encryption","Sensitive data in the cloud is encrypted with keys the bank controls (customer-managed keys or HSM-backed keys).","A.8.24","PR.DS","3","Key management configuration"],
 ["T","Cloud logging and monitoring","Cloud control plane and workload logs feed the SIEM.","A.8.15, A.8.16","DE.CM","8","Log source list"],
 ["T","Cloud network isolation","Cloud workloads are isolated with network controls, private connectivity and tenant isolation.","A.8.22","PR.IR","12","Network design"],
 ["T","SaaS security","SaaS applications are discovered and their security settings and access are governed (for example CASB or SSPM).","A.5.23","PR.PS, DE.CM","15","CASB or SSPM reports"],
 ["Pr","Cloud exit strategy","An exit and portability plan exists for each material cloud service.","A.5.23","GV.SC","15","Exit plans"]
],
"CTO-12": [
 ["Pr","Change management policy","A change policy covers all production changes, including infrastructure, applications, configurations and cloud.","A.8.32","PR.PS","4","Change policy"],
 ["Pr","Risk and impact assessment","Each change is assessed for risk, security and business impact before approval.","A.8.32","ID.RA","","Change records"],
 ["Pr","Testing and approval","Changes are tested and approved by the change advisory board or authorised approvers before implementation.","A.8.32","PR.PS","","CAB minutes, test evidence"],
 ["Pr","Emergency changes","Emergency changes follow a defined path and are reviewed retrospectively.","A.8.32","PR.PS","","Emergency change records"],
 ["T","Deployment segregation","Developers cannot deploy to production; deployments are controlled and logged.","A.8.31, A.5.3","PR.AA","6, 16","Deployment permissions"],
 ["Pr","Rollback plans","Changes have documented rollback plans.","A.8.32","PR.PS","","Change records"],
 ["Pr","Configuration and CMDB update","Baselines and the CMDB are updated after changes.","A.8.9","ID.AM","1, 4","CMDB audit trail"],
 ["T","Unauthorised change detection","Unauthorised changes are detected by reconciling actual changes (FIM and configuration monitoring) against approved tickets.","A.8.32, A.8.9","DE.CM","4","Reconciliation reports"],
 ["Pr","Security review of changes","Security reviews significant changes, and post-change verification confirms that controls remain effective.","A.8.32","ID.RA","","Security sign-offs"]
],
"CD-1": [
 ["T","24x7 security operations centre","A SOC, in-house or managed, monitors critical systems 24x7 with defined procedures.","A.8.16","DE.CM, DE.AE","13","SOC charter or contract, shift roster"],
 ["T","SIEM log coverage","Security logs from all critical systems, security tools, cloud and network devices are centralised in a SIEM.","A.8.15","DE.CM","8","Log source list, coverage gaps"],
 ["T","Log retention and integrity","Logs are time-synchronised, protected from tampering and retained for the required periods.","A.8.15, A.8.17","PR.PS","8","Retention settings, NTP configuration"],
 ["T","Detection use cases","Detection use cases mapped to MITRE ATT&CK and bank threat scenarios are maintained, tested and tuned.","A.8.16","DE.AE","8, 13","Use case library, ATT&CK coverage"],
 ["Pr","Alert triage and escalation","Alerts are triaged and escalated within defined SLAs by severity.","A.5.25","DE.AE, RS.MA","17","SLA definitions, metrics"],
 ["Pr","Threat intelligence programme","Strategic, operational and technical threat intelligence (including CBE and EG-FinCIRT sharing) is consumed and turned into actions and detections.","A.5.7","ID.RA, DE.AE","","Feeds, intelligence reports, actions taken"],
 ["Pr","Threat hunting","Proactive, hypothesis-driven threat hunting is performed periodically.","A.8.16","DE.AE","13","Hunt reports"],
 ["Pr","Insider threat programme","An insider threat programme coordinates security, HR and legal to detect and handle insider risks.","A.8.16, A.6.4","DE.CM","","Programme charter, procedure"],
 ["T","User behaviour analytics","Behaviour analytics detect anomalous user and privileged activity.","A.8.16","DE.AE","8","UEBA configuration, alert samples"],
 ["T","Forensic capability","Tools and procedures exist to collect and preserve evidence to support legal, HR and incident investigations.","A.5.28","RS.AN","17","Forensic toolkit, procedure, retainer"],
 ["Pr","SOC performance metrics","SOC performance (such as time to detect, time to respond and coverage) is measured and reported.","Cl. 9.1","GV.OV","","SOC metrics reports"]
],
"CD-2": [
 ["Pr","Incident response plan","An approved cyber incident response plan defines roles, phases and escalation.","A.5.24","RS.MA","17","IR plan"],
 ["P","Incident response team","A CSIRT with defined roles, an on-call rota and external support (for example a forensics retainer) is in place.","A.5.24","RS.MA","17","CSIRT roster, retainer contract"],
 ["Pr","Playbooks","Playbooks cover ransomware, DDoS, payment fraud, account takeover, data breach, insider and third-party incidents.","A.5.26","RS.MA, RS.MI","17","Playbook library"],
 ["Pr","Classification and severity","Incidents are classified by type and severity using defined criteria.","A.5.25","RS.AN","17","Classification matrix"],
 ["Pr","Notification to the CBE","Significant cyber incidents are reported to the CBE within the required timelines, using the required format.","A.5.5, A.6.8","RS.CO","17","Notification procedure, past notifications"],
 ["Pr","Other notifications","The bank notifies other parties as required: the PDPC within 72 hours for personal data, EG-CERT, card schemes, SWIFT and affected customers.","A.5.5, A.5.26","RS.CO","17","Notification matrix, templates"],
 ["Pr","Evidence handling","Evidence is collected with chain of custody so it is admissible.","A.5.28","RS.AN","17","Chain of custody forms"],
 ["Pr","Incident exercises","IR exercises, including an executive tabletop, run at least annually and cover key scenarios.","A.5.24","RS.MA, ID.IM","17","Exercise reports"],
 ["Pr","Lessons learned","Root-cause analysis and lessons learned are completed for significant incidents and tracked to closure.","A.5.27","ID.IM","17","Post-incident reports, action tracker"],
 ["Pr","Crisis communications","A crisis communications plan covers customers, media, regulators and staff.","A.5.24","RC.CO","17","Communications plan, templates"]
],
"OVM-1": [
 ["Pr","Third-party inventory and tiering","All third parties with access to bank data or systems are inventoried and risk-tiered by criticality.","A.5.19","GV.SC","15","Vendor register with tiers"],
 ["Pr","Pre-contract due diligence","Security due diligence, proportional to tier, is completed before onboarding a vendor.","A.5.19","GV.SC","15","Due diligence questionnaires, assessments"],
 ["Pr","Contractual security clauses","Contracts include security, confidentiality, data location, breach notification, right-to-audit, subcontracting and exit clauses.","A.5.20","GV.SC","15","Contract templates, sample contracts"],
 ["Pr","CBE outsourcing requirements","Material outsourcing is approved internally and notified to or approved by the CBE where required.","A.5.19","GV.SC, GV.OC","15","Outsourcing register, CBE approvals"],
 ["Pr","Ongoing monitoring","Critical vendors are reassessed periodically and their service security performance is monitored.","A.5.22","GV.SC","15","Reassessments, performance reviews"],
 ["T","Third-party access control","Vendor access uses named accounts, MFA, PAM or session recording, and time-limited approval.","A.5.15, A.8.2","PR.AA","6, 15","Vendor access configuration, logs"],
 ["Pr","Fourth-party oversight","Material subcontractors of critical vendors are identified and their risks are considered.","A.5.21","GV.SC","15","Subcontractor disclosures"],
 ["Pr","Exit and termination","Exit plans for critical vendors cover data return, deletion and transition.","A.5.20","GV.SC","15","Exit plans, termination checklist"],
 ["Pr","Concentration risk","Concentration and single-point-of-failure risks across vendors are assessed.","A.5.19","GV.SC, ID.RA","","Concentration analysis"],
 ["Pr","Software supply chain","Vendors provide security patches and SBOMs, critical software has escrow where needed, and vendor updates are integrity-checked.","A.5.21","GV.SC","16","SBOMs, escrow agreements"]
],
"OVM-2": [
 ["Pr","Business continuity governance","A business continuity policy and governance structure covers cyber disruption scenarios.","A.5.29","GV.PO, RC.RP","","BCM policy"],
 ["Pr","Business impact analysis","A BIA sets RTOs and RPOs for critical services, including core banking, payments, cards and digital channels.","A.5.30","GV.OC, RC.RP","","BIA, RTO and RPO register"],
 ["Pr","Business continuity plans","Business continuity plans exist for critical services and are kept current.","A.5.29","RC.RP","","BCPs"],
 ["T","Disaster recovery capability","A DR site and DR plans support recovery of critical systems within their RTOs.","A.5.30, A.8.14","RC.RP","11","DR plan, DR architecture"],
 ["Pr","DR testing","DR tests, including failover of critical systems, run at least annually and demonstrate recovery within RTO and RPO.","A.5.30","RC.RP, ID.IM","11","DR test reports"],
 ["T","Immutable backups","Critical data is backed up with immutable or offline copies, and restores are tested at least quarterly.","A.8.13","PR.DS, RC.RP","11","Backup policy, restore test reports"],
 ["Pr","Cyber recovery plan","A plan for destructive attacks (such as ransomware) covers clean-room recovery, identity infrastructure rebuild and validated restore.","A.5.29, A.5.30","RC.RP","11, 17","Cyber recovery plan, exercise results"],
 ["T","Redundancy","Critical infrastructure and connections have redundancy that matches availability needs.","A.8.14","PR.IR","","Redundancy design"],
 ["Pr","Capacity management","Capacity of critical systems is monitored and planned.","A.8.6","PR.IR","","Capacity reports"],
 ["P","Crisis management team","A crisis management team with defined roles leads major disruptions and is exercised.","A.5.29","RS.MA, RC.CO","","Crisis team charter, exercise records"],
 ["Pr","Payment operations resilience","Connections to national payment and settlement systems (such as RTGS and InstaPay) have tested contingency arrangements.","A.5.30","RC.RP","","Contingency procedures, test records"]
],
"OVM-3": [
 ["Pr","Testing programme","An annual cybersecurity testing plan, risk-based and approved, covers all critical systems.","A.5.35, A.8.29","ID.IM","18","Annual test plan"],
 ["Pr","Penetration testing","External and internal penetration tests are performed at least annually and after major changes.","A.8.8","ID.RA, ID.IM","18","Pen test reports"],
 ["Pr","Application and mobile testing","Critical web and mobile applications are pen-tested before release and periodically after.","A.8.29","ID.RA","16, 18","Application test reports"],
 ["Pr","Red teaming","Threat-led red team exercises test detection and response for critical functions periodically.","A.5.35","ID.IM","18","Red team reports"],
 ["Pr","Control validation","Security control effectiveness is validated (for example breach-and-attack simulation or purple teaming).","A.5.35","ID.IM","18","Validation results"],
 ["Pr","Remediation and retest","Test findings are tracked to closure and retested to confirm remediation.","Cl. 10.2","ID.IM","18","Findings tracker, retest evidence"],
 ["Pr","Tester independence","Testers are independent and qualified, and rules of engagement are approved.","A.5.35","GV.OV","18","Tester credentials, rules of engagement"],
 ["Pr","Independent framework assessment","Internal audit or an independent party periodically assesses compliance with the CBE framework.","Cl. 9.2, A.5.35","GV.OV, ID.IM","","Audit reports"],
 ["Pr","Vulnerability disclosure","A channel exists for researchers and customers to report security vulnerabilities responsibly.","A.6.8","ID.IM, RS.AN","","Disclosure policy, report log"]
]
};

const TYPES = {P:"People", Pr:"Process", T:"Technology"};
window.CBE_TYPES = ["People","Process","Technology"];
window.CBE_CONTROLS = [];
window.CBE_DOMAINS.forEach(([dom, fn]) => {
  (RAW[dom] || []).forEach((r, i) => window.CBE_CONTROLS.push({
    id: `${dom}.${i + 1}`, dom, fn, type: TYPES[r[0]], title: r[1], req: r[2], iso: r[3], nist: r[4], cis: r[5], ev: r[6]
  }));
});

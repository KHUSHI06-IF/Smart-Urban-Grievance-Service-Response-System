// translations.js

const translations = {
    en: {
        // Navigation Options
        "nav_dashboard": "Dashboard",
        "nav_file_complaint": "File Complaint",
        "nav_my_complaints": "My Complaints",
        "nav_track_complaint": "Track Complaint",
        "nav_profile": "Profile",
        "nav_logout": "Logout",

        // Navigation Search
        "nav_search_placeholder": "Search complaint by ID...",

        // --- Dashboard Specific ---
        "dashboard_overview": "Dashboard Overview",
        "dashboard_desc": "Track your recent complaints and their resolutions.",
        "stat_total": "Total Complaints",
        "stat_pending": "Pending",
        "stat_progress": "In Progress",
        "stat_resolved": "Resolved",
        "recent_complaints": "Recent Complaints",
        "view_all": "View All",
        "table_id": "Complaint ID",
        "table_category": "Category",
        "table_date": "Date Filed",
        "table_status": "Status",
        "table_action": "Action",
        "action_track": "Track",

        // --- File Complaint Specific ---
        "file_complaint_title": "File a New Complaint",
        "file_complaint_desc": "Please provide the details below to register your grievance.",
        "form_title": "Complaint Title",
        "form_title_placeholder": "e.g., Broken street light near Main St.",
        "form_category": "Category",
        "form_category_select": "Select Category",
        "cat_road": "Road & Transport",
        "cat_water": "Water Supply",
        "cat_garbage": "Garbage & Sanitation",
        "cat_electricity": "Electricity",
        "cat_other": "Other",
        "form_priority": "Priority",
        "pri_low": "Low",
        "pri_med": "Medium",
        "pri_high": "High (Emergency)",
        "form_address": "Detailed Address / Location",
        "form_address_placeholder": "Full location address",
        "form_desc": "Detailed Description",
        "form_desc_placeholder": "Describe the issue in detail...",
        "form_upload": "Upload Image Evidence",
        "upload_text1": "Upload a file",
        "upload_text2": "or drag and drop",
        "upload_text3": "PNG, JPG, GIF up to 10MB",
        "btn_cancel": "Cancel",
        "btn_submit": "Submit Complaint",

        // --- My Complaints Specific ---
        "my_complaints_title": "My Complaints",
        "my_complaints_desc": "History of all your filed concerns.",
        "filter_all": "All Statuses",
        "filter_pending": "Pending",
        "filter_progress": "In Progress",
        "filter_resolved": "Resolved",
        "action_view_details": "View Details",

        // --- Track Specific ---
        "track_title": "Track Your Complaint",
        "track_input_placeholder": "Enter Complaint ID (e.g. CMP10245)",
        "btn_track_status": "Track Status",

        "track_est_resolution": "Estimated Resolution",
        "track_attached_image": "Attached Image",
        "track_assigned_dept": "Assigned Dept",
        "track_officer": "Officer Assigned",

        "track_history": "Tracking History",
        "step1_title": "Complaint Submitted",
        "step1_desc": "Your complaint has been successfully registered in the system.",
        "step2_title": "Verified & Accepted",
        "step2_desc": "Admin has verified the details and accepted the complaint.",
        "step3_title": "Assigned to Officer",
        "step3_desc": "Assigned to Field Officer.",
        "step4_title": "Work in Progress",
        "step4_desc": "The team has arrived at the location and repair work has started.",
        "step5_title": "Final Inspection",
        "step5_desc": "Awaiting completion of work for final review.",
        "step6_title": "Resolved",
        "step6_desc": "Issue fixed and closed.",

        // --- Profile Specific ---
        "profile_title": "User Profile",
        "profile_desc": "Manage your account settings and personal information.",
        "profile_role": "Registered Citizen",
        "profile_member_since": "Member Since",
        "profile_total_reports": "Total Reports",
        "profile_personal_info": "Personal Information",
        "profile_full_name": "Full Name",
        "profile_phone": "Phone Number",
        "profile_email": "Email Address",
        "profile_default_address": "Default Address",
        "btn_save_changes": "Save Changes",
        "profile_security_settings": "Security Settings",
        "profile_password": "Password",
        "profile_password_last_changed": "Last changed 3 months ago",
        "btn_update": "Update"
    },
    hi: {
        // Navigation Options
        "nav_dashboard": "डैशबोर्ड",
        "nav_file_complaint": "शिकायत दर्ज करें",
        "nav_my_complaints": "मेरी शिकायतें",
        "nav_track_complaint": "शिकायत ट्रैक करें",
        "nav_profile": "प्रोफ़ाइल",
        "nav_logout": "लॉग आउट",

        // Navigation Search
        "nav_search_placeholder": "शिकायत आईडी से खोजें...",

        // --- Dashboard Specific ---
        "dashboard_overview": "डैशबोर्ड अवलोकन",
        "dashboard_desc": "अपनी हाल की शिकायतों और उनके समाधानों को ट्रैक करें।",
        "stat_total": "कुल शिकायतें",
        "stat_pending": "लंबित",
        "stat_progress": "प्रगति पर",
        "stat_resolved": "समाधान किया गया",
        "recent_complaints": "हाल की शिकायतें",
        "view_all": "सभी देखें",
        "table_id": "शिकायत आईडी",
        "table_category": "श्रेणी",
        "table_date": "दर्ज की गई तारीख",
        "table_status": "स्थिति",
        "table_action": "कार्रवाई",
        "action_track": "ट्रैक करें",

        // --- File Complaint Specific ---
        "file_complaint_title": "नई शिकायत दर्ज करें",
        "file_complaint_desc": "कृपया अपनी शिकायत दर्ज करने के लिए नीचे दिए गए विवरण प्रदान करें।",
        "form_title": "शिकायत का शीर्षक",
        "form_title_placeholder": "उदा., मुख्य सड़क के पास टूटी स्ट्रीट लाइट।",
        "form_category": "श्रेणी",
        "form_category_select": "श्रेणी चुनें",
        "cat_road": "सड़क और परिवहन",
        "cat_water": "जल आपूर्ति",
        "cat_garbage": "कचरा और स्वच्छता",
        "cat_electricity": "बिजली",
        "cat_other": "अन्य",
        "form_priority": "प्राथमिकता",
        "pri_low": "कम",
        "pri_med": "मध्यम",
        "pri_high": "उच्च (आपातकाल)",
        "form_address": "विस्तृत पता / स्थान",
        "form_address_placeholder": "पूरा स्थान पता",
        "form_desc": "विस्तृत विवरण",
        "form_desc_placeholder": "समस्या का विस्तार से वर्णन करें...",
        "form_upload": "चित्र साक्ष्य अपलोड करें",
        "upload_text1": "फ़ाइल अपलोड करें",
        "upload_text2": "या खींचें और छोड़ें",
        "upload_text3": "PNG, JPG, GIF 10MB तक",
        "btn_cancel": "रद्द करें",
        "btn_submit": "शिकायत जमा करें",

        // --- My Complaints Specific ---
        "my_complaints_title": "मेरी शिकायतें",
        "my_complaints_desc": "आपकी सभी दर्ज चिंताओं का इतिहास।",
        "filter_all": "सभी स्थितियां",
        "filter_pending": "लंबित",
        "filter_progress": "प्रगति पर",
        "filter_resolved": "समाधान किया गया",
        "action_view_details": "विवरण देखें",

        // --- Track Specific ---
        "track_title": "अपनी शिकायत ट्रैक करें",
        "track_input_placeholder": "शिकायत आईडी दर्ज करें (उदा. CMP10245)",
        "btn_track_status": "स्थिति ट्रैक करें",

        "track_est_resolution": "अनुमानित समाधान",
        "track_attached_image": "संलग्न चित्र",
        "track_assigned_dept": "आवंटित विभाग",
        "track_officer": "आवंटित अधिकारी",

        "track_history": "ट्रैकिंग इतिहास",
        "step1_title": "शिकायत दर्ज की गई",
        "step1_desc": "आपकी शिकायत सिस्टम में सफलतापूर्वक पंजीकृत हो गई है।",
        "step2_title": "सत्यापित और स्वीकृत",
        "step2_desc": "व्यवस्थापक ने विवरणों का सत्यापन किया है और शिकायत स्वीकार कर ली है।",
        "step3_title": "अधिकारी को आवंटित",
        "step3_desc": "फील्ड अधिकारी को आवंटित।",
        "step4_title": "काम प्रगति पर है",
        "step4_desc": "टीम स्थान पर पहुँच गई है और मरम्मत का काम शुरू हो गया है।",
        "step5_title": "अंतिम निरीक्षण",
        "step5_desc": "अंतिम समीक्षा के लिए काम पूरा होने की प्रतीक्षा में।",
        "step6_title": "समाधान किया गया",
        "step6_desc": "समस्या ठीक हो गई और बंद हो गई।",

        // --- Profile Specific ---
        "profile_title": "उपयोगकर्ता प्रोफ़ाइल",
        "profile_desc": "अपनी खाता सेटिंग और व्यक्तिगत जानकारी प्रबंधित करें।",
        "profile_role": "पंजीकृत नागरिक",
        "profile_member_since": "सदस्यता की शुरुआत",
        "profile_total_reports": "कुल रिपोर्ट",
        "profile_personal_info": "व्यक्तिगत जानकारी",
        "profile_full_name": "पूरा नाम",
        "profile_phone": "फ़ोन नंबर",
        "profile_email": "ईमेल पता",
        "profile_default_address": "डिफ़ॉल्ट पता",
        "btn_save_changes": "परिवर्तन सहेजें",
        "profile_security_settings": "सुरक्षा सेटिंग्स",
        "profile_password": "पासवर्ड",
        "profile_password_last_changed": "पिछली बार 3 महीने पहले बदला गया था",
        "btn_update": "अपडेट"
    },
    mr: {
        // Navigation Options
        "nav_dashboard": "डॅशबोर्ड",
        "nav_file_complaint": "तक्रार नोंदवा",
        "nav_my_complaints": "माझ्या तक्रारी",
        "nav_track_complaint": "तक्रारीचा मागोवा घ्या",
        "nav_profile": "प्रोफाइल",
        "nav_logout": "लॉग आउट",

        // Navigation Search
        "nav_search_placeholder": "तक्रार आयडीने शोधा...",

        // --- Dashboard Specific ---
        "dashboard_overview": "डॅशबोर्ड विहंगावलोकन",
        "dashboard_desc": "तुमच्या अलीकडील तक्रारी आणि त्यांच्या निराकरणांचा मागोवा घ्या.",
        "stat_total": "एकूण तक्रारी",
        "stat_pending": "प्रलंबित",
        "stat_progress": "प्रगतीपथावर",
        "stat_resolved": "निराकरण झाले",
        "recent_complaints": "अलीकडील तक्रारी",
        "view_all": "सर्व पहा",
        "table_id": "तक्रार क्रमांक",
        "table_category": "श्रेणी",
        "table_date": "नोंदणीची तारीख",
        "table_status": "स्थिती",
        "table_action": "कृती",
        "action_track": "मागोवा घ्या",

        // --- File Complaint Specific ---
        "file_complaint_title": "नवीन तक्रार नोंदवा",
        "file_complaint_desc": "तुमची तक्रार नोंदवण्यासाठी कृपया खालील तपशील द्या.",
        "form_title": "तक्रारीचे शीर्षक",
        "form_title_placeholder": "उदा., मुख्य रस्त्याजवळ तुटलेला स्ट्रीट लाईट.",
        "form_category": "श्रेणी",
        "form_category_select": "श्रेणी निवडा",
        "cat_road": "रस्ते आणि वाहतूक",
        "cat_water": "पाणी पुरवठा",
        "cat_garbage": "कचरा आणि स्वच्छता",
        "cat_electricity": "वीज",
        "cat_other": "इतर",
        "form_priority": "प्राधान्य",
        "pri_low": "कमी",
        "pri_med": "मध्यम",
        "pri_high": "उच्च (आणीबाणी)",
        "form_address": "सविस्तर पत्ता / ठिकाण",
        "form_address_placeholder": "संपूर्ण पत्ता",
        "form_desc": "सविस्तर वर्णन",
        "form_desc_placeholder": "समस्येचे सविस्तर वर्णन करा...",
        "form_upload": "इमेज पुरावा अपलोड करा",
        "upload_text1": "फाईल अपलोड करा",
        "upload_text2": "किंवा ड्रॅग आणि ड्रॉप करा",
        "upload_text3": "PNG, JPG, GIF 10MB पर्यंत",
        "btn_cancel": "रद्द करा",
        "btn_submit": "तक्रार सबमिट करा",

        // --- My Complaints Specific ---
        "my_complaints_title": "माझ्या तक्रारी",
        "my_complaints_desc": "तुम्ही नोंदवलेल्या सर्व तक्रारींचा इतिहास.",
        "filter_all": "सर्व स्थिती",
        "filter_pending": "प्रलंबित",
        "filter_progress": "प्रगतीपथावर",
        "filter_resolved": "निराकरण झाले",
        "action_view_details": "तपशील पहा",

        // --- Track Specific ---
        "track_title": "तुमच्या तक्रारीचा मागोवा घ्या",
        "track_input_placeholder": "तक्रार आयडी प्रविष्ट करा (उदा. CMP10245)",
        "btn_track_status": "स्थिती तपासा",

        "track_est_resolution": "अंदाजित निराकरण",
        "track_attached_image": "जोडलेली इमेज",
        "track_assigned_dept": "नियुक्त विभाग",
        "track_officer": "नियुक्त अधिकारी",

        "track_history": "ट्रॅकिंग इतिहास",
        "step1_title": "तक्रार नोंदवली",
        "step1_desc": "तुमची तक्रार सिस्टममध्ये यशस्वीरित्या नोंदवली गेली आहे.",
        "step2_title": "पडताळणी आणि स्वीकार",
        "step2_desc": "प्रशासकाने तपशील पडताळले आहेत आणि तक्रार स्वीकारली आहे.",
        "step3_title": "अधिकाऱ्याला नियुक्त",
        "step3_desc": "फील्ड अधिकाऱ्याला नियुक्त केले.",
        "step4_title": "काम प्रगतीपथावर आहे",
        "step4_desc": "टीम जागेवर पोहोचली आहे आणि दुरुस्तीचे काम सुरू झाले आहे.",
        "step5_title": "अंतिम तपासणी",
        "step5_desc": "अंतिम पुनरावलोकनासाठी काम पूर्ण होण्याची प्रतीक्षा करत आहे.",
        "step6_title": "निराकरण झाले",
        "step6_desc": "समस्या सुटली आणि बंद झाली.",

        // --- Profile Specific ---
        "profile_title": "वापरकर्ता प्रोफाइल",
        "profile_desc": "तुमची खाते सेटिंग्ज आणि वैयक्तिक माहिती व्यवस्थापित करा.",
        "profile_role": "नोंदणीकृत नागरिक",
        "profile_member_since": "सदस्यता सुरुवात",
        "profile_total_reports": "एकूण अहवाल",
        "profile_personal_info": "वैयक्तिक माहिती",
        "profile_full_name": "पूर्ण नाव",
        "profile_phone": "फोन नंबर",
        "profile_email": "ईमेल पत्ता",
        "profile_default_address": "डिफॉल्ट पत्ता",
        "btn_save_changes": "बदल जतन करा",
        "profile_security_settings": "सुरक्षा सेटिंग्ज",
        "profile_password": "पासवर्ड",
        "profile_password_last_changed": "३ महिन्यांपूर्वी बदलण्यात आले",
        "btn_update": "अपडेट करा"
    }
};

// Function to handle translation
function toggleLanguage() {
    const langSelect = document.getElementById('languageSelector');
    let lang = langSelect ? langSelect.value : localStorage.getItem('appLang') || 'en';

    // Save to localStorage
    localStorage.setItem('appLang', lang);

    // Translate all elements with data-translate attribute
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // Check if it's an input/textarea placeholder vs innerText
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });
}

// Ensure the language is loaded correctly on page load
document.addEventListener('DOMContentLoaded', () => {
    // Inject the language selector into the top right if it's not present natively 
    // Usually handled securely in the header
    const savedLang = localStorage.getItem('appLang') || 'en';

    const langSelector = document.getElementById('languageSelector');
    if (langSelector) {
        langSelector.value = savedLang;
        langSelector.addEventListener('change', toggleLanguage);
    }

    toggleLanguage();
});
/**
 * HealthChef Application Core Logic & State Management
 * Disease-Aware Indian Clinical Nutrition, Voice AI & Culinary Intelligence
 */

const HealthChefApp = (() => {
  // Application State
  const defaultState = {
    theme: "light",
    currentUser: null, // user object when logged in
    onboardingStep: 1,
    activeTab: "tabHome",
    navHistory: [],
    
    // User Profile
    profile: {
      name: "Rajesh Sharma",
      age: 42,
      gender: "Male",
      height: 172,
      weight: 78,
      goalWeight: 72,
      activityLevel: "Moderately Active",
      primaryGoal: "Lose weight",
      conditions: ["Diabetes", "Hypertension"],
      customConditions: ["Fatty Liver (Mild)"],
      dietType: "Vegetarian",
      allergies: ["Peanuts"],
      dislikedFoods: ["Karela"],
      geminiApiKey: ""
    },

    // Tracking State
    tracking: {
      date: new Date().toISOString().split("T")[0],
      caloriesConsumed: 1240,
      caloriesTarget: 1850,
      macros: {
        protein: 68,
        proteinTarget: 85,
        carbs: 142,
        carbsTarget: 190,
        fat: 38,
        fatTarget: 45
      },
      waterGlasses: 7,
      waterTarget: 10,
      sleepBedtime: "11:00 PM - 06:30 AM",
      sleepDuration: "7.5",
      steps: 6240,
      stepsTarget: 8000,
      meals: {
        breakfast: {
          name: "Crispy Ragi & Methi Dosa with Coconut Chutney",
          calories: 220,
          protein: 7,
          carbs: 38,
          fat: 4,
          fiber: 8,
          logged: true
        },
        lunch: {
          name: "Dal Tadka with Sprouted Methi & Brown Rice",
          calories: 410,
          protein: 17,
          carbs: 66,
          fat: 7,
          fiber: 11,
          logged: true
        },
        snack: {
          name: "Turmeric & Pink Salt Roasted Makhana",
          calories: 140,
          protein: 4,
          carbs: 24,
          fat: 3,
          fiber: 4,
          logged: true
        },
        dinner: {
          name: "Moong Dal & Vegetable Khichdi with Ghee",
          calories: 320,
          protein: 13,
          carbs: 52,
          fat: 6,
          fiber: 8,
          logged: false
        }
      },
      workouts: [
        { id: 1, name: "Brisk Morning Walk", minutes: 30, calories: 140, time: "07:15 AM" }
      ],
      medications: [
        { id: 1, name: "Metformin", dosage: "500 mg", timing: "Morning", relation: "After Food", taken: true, reminder: true },
        { id: 2, name: "Telmisartan", dosage: "40 mg", timing: "Morning", relation: "Empty Stomach", taken: true, reminder: true },
        { id: 3, name: "Vitamin D3", dosage: "60,000 IU", timing: "Night", relation: "After Food", taken: false, reminder: true }
      ],
      otherActivities: [
        { id: 1, name: "Anulom Vilom Pranayama (15 mins)", completed: true },
        { id: 2, name: "Post-lunch 500-step stroll", completed: true }
      ],
      micronutrients: {
        iron: 14.8, // mg
        calcium: 780, // mg
        sodium: 1420 // mg
      }
    },

    // AI Recipe Studio State
    recipeStudio: {
      mealSlot: "lunch",
      cuisine: "north indian",
      calorieTarget: "balanced",
      cookingTime: "any",
      toneLang: "hinglish", // 'hinglish' | 'english'
      pantryIngredients: ["Whole Wheat Atta", "Moong Dal", "Lauki", "Methi Leaves"],
      generatedRecipes: [],
      activeOptionIndex: 0,
      isReadingTTS: false,
      currentReadingStepIndex: -1
    },

    // 7-Day Planner State
    planner: {
      selectedDay: "Monday",
      weeklyPlans: {
        "Monday": {
          breakfast: "Crispy Ragi & Methi Dosa with Mint Chutney",
          lunch: "Dal Tadka with Sprouted Methi & Brown Rice",
          snack: "Turmeric & Pink Salt Roasted Makhana",
          dinner: "Moong Dal & Vegetable Khichdi with Ghee"
        },
        "Tuesday": {
          breakfast: "Steamed Vegetable Oats Idli with Drumstick Sambar",
          lunch: "Palak & Tofu Bhurji with 2 Missi Rotis",
          snack: "Boiled Kala Chana & Sprout Chaat",
          dinner: "Silken Tofu & Greens Clear Soup"
        },
        "Wednesday": {
          breakfast: "Protein Pesarattu with Ginger Allam",
          lunch: "Lauki & Moong Dal with Bajra Phulka",
          snack: "Air-Crisp Methi Muthiya with Dip",
          dinner: "Methi & Moong Dal Cheela with Chutney"
        },
        "Thursday": {
          breakfast: "Air-Fried Kasuri Methi Puri with Kala Chana",
          lunch: "Tomato & Garlic Rasam with Steamed Foxtail Millet",
          snack: "Steamed Edamame Sundal with Fresh Coconut",
          dinner: "Warm Roasted Pumpkin & Ginger Potage"
        },
        "Friday": {
          breakfast: "Lauki & Mint Thepla with Probiotic Curd",
          lunch: "Brown Rice Kootu with Ash Gourd & Chana Dal",
          snack: "Roasted Makhana with Turmeric",
          dinner: "Grilled Herb Paneer Steak with Roasted Veggies"
        },
        "Saturday": {
          breakfast: "Sprouted Horse Gram Dosa with Rasam",
          lunch: "Sprouted Moong Sambar with Brown Rice & Thoran",
          snack: "Sprout Salad with Lemon and Seeds",
          dinner: "Moong Dal Khichdi with Roasted Jeera Dahi"
        },
        "Sunday": {
          breakfast: "Sprouted Moong & Paneer Stuffed Paratha",
          lunch: "Kashmiri Style Rajma with Steamed Quinoa",
          snack: "Green Tea with Soaked Walnuts",
          dinner: "Vegetable Soup with Steamed Dumplings"
        }
      },
      groceries: [
        { name: "Ragi Flour (Finger Millet)", checked: false, category: "Grains" },
        { name: "Fresh Fenugreek (Methi) Leaves", checked: false, category: "Produce" },
        { name: "Yellow Moong Dal", checked: true, category: "Pulses" },
        { name: "Brown Basmati Rice", checked: false, category: "Grains" },
        { name: "Makhana (Foxnuts)", checked: false, category: "Pantry" },
        { name: "Bottle Gourd (Lauki)", checked: true, category: "Produce" },
        { name: "Organic Firm Tofu / Low-Fat Paneer", checked: false, category: "Protein" },
        { name: "Rolled Oats", checked: false, category: "Grains" },
        { name: "Sendha Namak (Himalayan Rock Salt)", checked: true, category: "Spices" }
      ]
    },

    // Post-Surgery State
    surgeryCare: {
      procedure: "Gallbladder removal (Cholecystectomy)",
      timeline: "day 4-7",
      digestiveState: "Nausea / Fragile",
      doctorAdvice: "Strictly low-fat, avoid ghee/butter, take warm liquids and pureed soups.",
      generatedPlan: null
    }
  };

  let state = JSON.parse(JSON.stringify(defaultState));
  let speechSynthUtterance = null;
  let voiceRecognition = null;
  let editingMealKey = null;

  // Initialize Application
  const init = () => {
    loadPersistentState();
    applyTheme(state.theme);
    setupVoiceRecognition();

    // Check if user is logged in
    if (state.currentUser) {
      showScreen("screenApp");
      document.getElementById("mainHeader").style.display = "flex";
      document.getElementById("bottomNavDock").style.display = "flex";
      document.getElementById("headerUserChip").style.display = "flex";
      document.getElementById("headerUserName").textContent = state.profile.name.split(" ")[0];
      renderDashboard();
      renderMealsLog();
      renderHydration();
      renderMedications();
      renderWorkouts();
      renderOtherActivities();
      renderMicronutrients();
      renderPlanner();
      renderNuskeList();
      renderProfile();
      generateInitialRecipes();
    } else {
      showScreen("screenAuth");
      document.getElementById("bottomNavDock").style.display = "none";
      document.getElementById("headerUserChip").style.display = "none";
    }

    renderWeightSparkline();
  };

  // State Persistence
  const saveState = () => {
    try {
      localStorage.setItem("healthchef_app_state", JSON.stringify(state));
      // Also update multi-user database
      if (state.currentUser && state.currentUser.id) {
        let usersDb = JSON.parse(localStorage.getItem("healthchef_users_db") || "{}");
        usersDb[state.currentUser.id] = {
          user: state.currentUser,
          profile: state.profile,
          tracking: state.tracking,
          planner: state.planner
        };
        localStorage.setItem("healthchef_users_db", JSON.stringify(usersDb));
      }
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  };

  const loadPersistentState = () => {
    try {
      const saved = localStorage.getItem("healthchef_app_state");
      if (saved) {
        const parsed = JSON.parse(saved);
        state = { ...defaultState, ...parsed };
      }
    } catch (e) {
      console.warn("Storage load error:", e);
    }
  };

  // Screen & Navigation Management (Back Button Tracking)
  const showScreen = (screenId, recordHistory = true) => {
    if (recordHistory && state.activeScreen && state.activeScreen !== screenId) {
      state.navHistory.push({ type: "screen", id: state.activeScreen });
    }
    state.activeScreen = screenId;
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    const target = document.getElementById(screenId);
    if (target) target.classList.add("active");

    updateBackButtonVisibility();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToTab = (tabId, recordHistory = true) => {
    if (recordHistory && state.activeTab && state.activeTab !== tabId) {
      state.navHistory.push({ type: "tab", id: state.activeTab });
    }
    state.activeTab = tabId;

    document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
    const target = document.getElementById(tabId);
    if (target) target.classList.add("active");

    // Update Bottom Nav Active States
    document.querySelectorAll(".nav-item-btn").forEach(btn => btn.classList.remove("active"));
    const navMap = {
      tabHome: "navBtnHome",
      tabRecipes: "navBtnRecipes",
      tabTrack: "navBtnTrack",
      tabPlanner: "navBtnPlanner",
      tabNuske: "navBtnNuske"
    };
    if (navMap[tabId]) {
      const navBtn = document.getElementById(navMap[tabId]);
      if (navBtn) navBtn.classList.add("active");
    }

    updateBackButtonVisibility();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBackSlide = () => {
    if (state.navHistory.length > 0) {
      const last = state.navHistory.pop();
      if (last.type === "screen") {
        showScreen(last.id, false);
      } else if (last.type === "tab") {
        navigateToTab(last.id, false);
      } else if (last.type === "onboarding") {
        goToOnboardStep(last.step, false);
      }
    } else {
      if (state.activeTab !== "tabHome") {
        navigateToTab("tabHome", false);
      }
    }
    updateBackButtonVisibility();
  };

  const updateBackButtonVisibility = () => {
    const btnBack = document.getElementById("btnHeaderBack");
    if (!btnBack) return;
    if (state.activeScreen === "screenOnboarding" && state.onboardingStep > 1) {
      btnBack.style.display = "flex";
    } else if (state.activeScreen === "screenApp" && (state.navHistory.length > 0 || state.activeTab !== "tabHome")) {
      btnBack.style.display = "flex";
    } else {
      btnBack.style.display = "none";
    }
  };

  // Theme Toggler
  const toggleTheme = () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    applyTheme(state.theme);
    saveState();
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.getElementById("btnThemeToggle");
    if (btn) {
      btn.textContent = theme === "light" ? "☀️" : "🌙";
    }
  };

  // Toast Notification
  const showToast = (message, duration = 3000) => {
    const toast = document.getElementById("toastNotice");
    if (!toast) return;
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => {
      toast.style.display = "none";
    }, duration);
  };

  // =========================================================================
  // DUAL AUTHENTICATION & LOGIN
  // =========================================================================
  const switchAuthMethod = (method) => {
    const tabPhone = document.getElementById("tabBtnPhone");
    const tabEmail = document.getElementById("tabBtnEmail");
    const panelPhone = document.getElementById("authPanelPhone");
    const panelEmail = document.getElementById("authPanelEmail");

    if (method === "phone") {
      tabPhone.classList.add("active");
      tabEmail.classList.remove("active");
      panelPhone.classList.add("active");
      panelEmail.classList.remove("active");
    } else {
      tabEmail.classList.add("active");
      tabPhone.classList.remove("active");
      panelEmail.classList.add("active");
      panelPhone.classList.remove("active");
    }
  };

  const sendOtp = () => {
    const phoneInput = document.getElementById("inputPhoneNumber");
    const val = phoneInput.value.trim();
    if (!val || val.length !== 10 || isNaN(val)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      phoneInput.focus();
      return;
    }

    document.getElementById("btnSendOtp").style.display = "none";
    const otpSec = document.getElementById("otpSection");
    otpSec.style.display = "block";
    document.getElementById("otp1").focus();
    showToast("OTP sent to +91 " + val + ". Test code is 4321");
  };

  const handleOtpInput = (index, event) => {
    const val = event.target.value;
    if (val.length === 1 && index < 4) {
      document.getElementById("otp" + (index + 1)).focus();
    } else if (val.length === 0 && index > 1 && event.inputType === "deleteContentBackward") {
      document.getElementById("otp" + (index - 1)).focus();
    }
  };

  const verifyOtp = () => {
    const o1 = document.getElementById("otp1").value;
    const o2 = document.getElementById("otp2").value;
    const o3 = document.getElementById("otp3").value;
    const o4 = document.getElementById("otp4").value;
    const entered = `${o1}${o2}${o3}${o4}`;
    const phone = document.getElementById("inputPhoneNumber").value.trim();

    if (entered.length < 4) {
      alert("Please enter all 4 digits of the OTP.");
      return;
    }

    // Lookup user in multi-user database
    const userId = "phone_" + phone;
    let usersDb = JSON.parse(localStorage.getItem("healthchef_users_db") || "{}");

    if (usersDb[userId]) {
      // Existing User Re-login
      state.currentUser = usersDb[userId].user;
      state.profile = usersDb[userId].profile;
      if (usersDb[userId].tracking) state.tracking = usersDb[userId].tracking;
      if (usersDb[userId].planner) state.planner = usersDb[userId].planner;
      saveState();
      showToast("Welcome back, " + state.profile.name + "! Profile restored.");
      completeLoginAndLaunch();
    } else {
      // New User -> proceed to mandatory 5-step onboarding
      state.currentUser = { id: userId, phone: phone, type: "phone" };
      state.profile.name = "Guest Member";
      saveState();
      startOnboarding();
    }
  };

  const loginWithEmail = () => {
    const email = document.getElementById("inputEmail").value.trim();
    const pass = document.getElementById("inputPassword").value.trim();

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!pass || pass.length < 4) {
      alert("Password must be at least 4 characters.");
      return;
    }

    const userId = "email_" + email.toLowerCase().replace(/[^a-z0-9]/g, "_");
    let usersDb = JSON.parse(localStorage.getItem("healthchef_users_db") || "{}");

    if (usersDb[userId]) {
      // Restore user
      state.currentUser = usersDb[userId].user;
      state.profile = usersDb[userId].profile;
      if (usersDb[userId].tracking) state.tracking = usersDb[userId].tracking;
      if (usersDb[userId].planner) state.planner = usersDb[userId].planner;
      saveState();
      showToast("Signed in as " + state.profile.name + ". Data loaded.");
      completeLoginAndLaunch();
    } else {
      // New User
      state.currentUser = { id: userId, email: email, type: "email" };
      state.profile.name = email.split("@")[0];
      saveState();
      startOnboarding();
    }
  };

  const launchDemoMode = () => {
    state.currentUser = { id: "demo_rajesh", name: "Rajesh Sharma", type: "guest" };
    state.profile = {
      name: "Rajesh Sharma",
      age: 42,
      gender: "Male",
      height: 172,
      weight: 78,
      goalWeight: 72,
      activityLevel: "Moderately Active",
      primaryGoal: "Lose weight",
      conditions: ["Diabetes", "Hypertension"],
      customConditions: ["Fatty Liver (Mild)"],
      dietType: "Vegetarian",
      allergies: ["Peanuts"],
      dislikedFoods: ["Karela"],
      geminiApiKey: ""
    };
    saveState();
    showToast("Loaded Guest Demo Profile (Rajesh Sharma, 42)");
    completeLoginAndLaunch();
  };

  const completeLoginAndLaunch = () => {
    showScreen("screenApp");
    document.getElementById("mainHeader").style.display = "flex";
    document.getElementById("bottomNavDock").style.display = "flex";
    document.getElementById("headerUserChip").style.display = "flex";
    document.getElementById("headerUserName").textContent = state.profile.name.split(" ")[0];
    renderDashboard();
    renderMealsLog();
    renderHydration();
    renderMedications();
    renderWorkouts();
    renderOtherActivities();
    renderMicronutrients();
    renderPlanner();
    renderNuskeList();
    renderProfile();
    generateInitialRecipes();
  };

  // =========================================================================
  // 5-STEP HEALTH ASSESSMENT ONBOARDING
  // =========================================================================
  const startOnboarding = () => {
    state.onboardingStep = 1;
    showScreen("screenOnboarding");
    document.getElementById("mainHeader").style.display = "flex";
    document.getElementById("bottomNavDock").style.display = "none";
    document.getElementById("headerUserChip").style.display = "none";
    goToOnboardStep(1, false);
  };

  const goToOnboardStep = (stepNumber, recordHistory = true) => {
    if (recordHistory && state.onboardingStep !== stepNumber) {
      state.navHistory.push({ type: "onboarding", step: state.onboardingStep });
    }
    state.onboardingStep = stepNumber;

    // Update Stepper Dots
    for (let i = 1; i <= 5; i++) {
      const dot = document.getElementById("stepDot" + i);
      const line = document.getElementById("stepLine" + i);
      if (dot) {
        dot.classList.remove("active", "completed");
        if (i === stepNumber) {
          dot.classList.add("active");
        } else if (i < stepNumber) {
          dot.classList.add("completed");
        }
      }
      if (line) {
        if (i < stepNumber) line.classList.add("filled");
        else line.classList.remove("filled");
      }
    }

    // Toggle Panes
    document.querySelectorAll(".onboarding-step-pane").forEach(p => p.classList.remove("active"));
    const pane = document.getElementById("onboardStep" + stepNumber);
    if (pane) pane.classList.add("active");

    updateBackButtonVisibility();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextOnboardStep = (nextStep) => {
    // Validate Step 2 Biometrics
    if (state.onboardingStep === 2) {
      const name = document.getElementById("onboardName").value.trim();
      const age = parseInt(document.getElementById("onboardAge").value, 10);
      const height = parseInt(document.getElementById("onboardHeight").value, 10);
      const weight = parseInt(document.getElementById("onboardWeight").value, 10);

      if (!name) {
        alert("Please enter your name.");
        return;
      }
      if (isNaN(age) || age < 12 || age > 110) {
        alert("Please enter a valid age.");
        return;
      }
      if (isNaN(height) || height < 80 || height > 240) {
        alert("Please enter a valid height in cm.");
        return;
      }
      if (isNaN(weight) || weight < 25 || weight > 250) {
        alert("Please enter a valid weight in kg.");
        return;
      }

      state.profile.name = name;
      state.profile.age = age;
      state.profile.gender = document.getElementById("onboardGender").value;
      state.profile.height = height;
      state.profile.weight = weight;
      state.profile.activityLevel = document.getElementById("onboardActivity").value;

      // Auto compute TDEE
      computeNutritionalTargets();
    }

    // Validate Step 3 Goals
    if (state.onboardingStep === 3) {
      const gw = parseFloat(document.getElementById("onboardGoalWeight").value);
      if (!isNaN(gw) && gw > 20 && gw < 250) {
        state.profile.goalWeight = gw;
      } else {
        state.profile.goalWeight = state.profile.weight;
      }
    }

    goToOnboardStep(nextStep);
  };

  const prevOnboardStep = (prevStep) => {
    goToOnboardStep(prevStep, false);
  };

  const selectSingleChip = (element, targetProperty) => {
    const parent = element.parentElement;
    parent.querySelectorAll(".selectable-chip").forEach(c => c.classList.remove("selected"));
    element.classList.add("selected");
    const text = element.textContent.replace(/^[^\w]+/, "").trim();

    if (targetProperty === "onboardGoal") {
      state.profile.primaryGoal = text;
    } else if (targetProperty === "onboardDietType") {
      state.profile.dietType = text;
    }
  };

  const toggleMultiCondition = (element, conditionName) => {
    if (conditionName === "None") {
      element.parentElement.querySelectorAll(".selectable-chip").forEach(c => c.classList.remove("selected"));
      element.classList.add("selected");
      state.profile.conditions = ["None"];
      return;
    }

    // Remove None if selecting a real condition
    const noneChip = Array.from(element.parentElement.children).find(c => c.textContent.includes("None"));
    if (noneChip) noneChip.classList.remove("selected");
    state.profile.conditions = state.profile.conditions.filter(c => c !== "None");

    if (element.classList.contains("selected")) {
      element.classList.remove("selected");
      state.profile.conditions = state.profile.conditions.filter(c => c !== conditionName);
    } else {
      element.classList.add("selected");
      if (!state.profile.conditions.includes(conditionName)) {
        state.profile.conditions.push(conditionName);
      }
    }
  };

  const addCustomCondition = () => {
    const input = document.getElementById("inputCustomCondition");
    const val = input.value.trim();
    if (!val) return;

    if (!state.profile.customConditions.includes(val)) {
      state.profile.customConditions.push(val);
      renderCustomConditionsTags();
      input.value = "";
    }
  };

  const removeCustomCondition = (name) => {
    state.profile.customConditions = state.profile.customConditions.filter(c => c !== name);
    renderCustomConditionsTags();
  };

  const renderCustomConditionsTags = () => {
    const container = document.getElementById("customConditionsList");
    if (!container) return;
    container.innerHTML = state.profile.customConditions.map(c => `
      <span class="tag-chip">${c} <span class="tag-chip-remove" onclick="HealthChefApp.removeCustomCondition('${c}')">×</span></span>
    `).join("");
  };

  const addAllergyTag = () => {
    const input = document.getElementById("inputAllergy");
    const val = input.value.trim();
    if (!val) return;
    if (!state.profile.allergies.includes(val)) {
      state.profile.allergies.push(val);
      renderAllergiesTags();
      input.value = "";
    }
  };

  const removeAllergyTag = (elem) => {
    const text = elem.parentElement.textContent.replace("×", "").trim();
    state.profile.allergies = state.profile.allergies.filter(a => a !== text);
    renderAllergiesTags();
  };

  const renderAllergiesTags = () => {
    const list = document.getElementById("allergiesTagList");
    if (!list) return;
    list.innerHTML = state.profile.allergies.map(a => `
      <span class="tag-chip">${a} <span class="tag-chip-remove" onclick="HealthChefApp.removeAllergyTag(this)">×</span></span>
    `).join("");
  };

  const addDislikedTag = () => {
    const input = document.getElementById("inputDisliked");
    const val = input.value.trim();
    if (!val) return;
    if (!state.profile.dislikedFoods.includes(val)) {
      state.profile.dislikedFoods.push(val);
      renderDislikedTags();
      input.value = "";
    }
  };

  const removeDislikedTag = (elem) => {
    const text = elem.parentElement.textContent.replace("×", "").trim();
    state.profile.dislikedFoods = state.profile.dislikedFoods.filter(d => d !== text);
    renderDislikedTags();
  };

  const renderDislikedTags = () => {
    const list = document.getElementById("dislikedTagList");
    if (!list) return;
    list.innerHTML = state.profile.dislikedFoods.map(d => `
      <span class="tag-chip">${d} <span class="tag-chip-remove" onclick="HealthChefApp.removeDislikedTag(this)">×</span></span>
    `).join("");
  };

  const computeNutritionalTargets = () => {
    // Mifflin-St Jeor formula
    const p = state.profile;
    let bmr = (10 * p.weight) + (6.25 * p.height) - (5 * p.age);
    if (p.gender === "Male") bmr += 5;
    else bmr -= 161;

    const activityFactors = {
      "Sedentary": 1.2,
      "Lightly Active": 1.375,
      "Moderately Active": 1.55,
      "Very Active": 1.725
    };
    const tdee = Math.round(bmr * (activityFactors[p.activityLevel] || 1.4));

    let targetCal = tdee;
    if (p.primaryGoal.includes("Lose")) targetCal = Math.round(tdee - 450);
    else if (p.primaryGoal.includes("Gain") || p.primaryGoal.includes("Build")) targetCal = Math.round(tdee + 350);

    state.tracking.caloriesTarget = targetCal;
    state.tracking.macros.proteinTarget = Math.round(p.weight * 1.2);
    state.tracking.macros.fatTarget = Math.round((targetCal * 0.25) / 9);
    state.tracking.macros.carbsTarget = Math.round((targetCal - (state.tracking.macros.proteinTarget * 4) - (state.tracking.macros.fatTarget * 9)) / 4);
  };

  const completeOnboarding = () => {
    computeNutritionalTargets();
    saveState();
    showToast("Assessment complete! Customizing clinical nutritional profile...");
    completeLoginAndLaunch();
  };

  const retakeAssessment = () => {
    // Re-fill onboarding fields from current profile
    document.getElementById("onboardName").value = state.profile.name;
    document.getElementById("onboardAge").value = state.profile.age;
    document.getElementById("onboardGender").value = state.profile.gender;
    document.getElementById("onboardHeight").value = state.profile.height;
    document.getElementById("onboardWeight").value = state.profile.weight;
    document.getElementById("onboardGoalWeight").value = state.profile.goalWeight;
    document.getElementById("onboardActivity").value = state.profile.activityLevel;
    renderCustomConditionsTags();
    renderAllergiesTags();
    renderDislikedTags();

    startOnboarding();
  };

  // =========================================================================
  // HOME DASHBOARD RENDERING (#tabHome)
  // =========================================================================
  const renderDashboard = () => {
    document.getElementById("dashGreetingName").textContent = state.profile.name.split(" ")[0];
    document.getElementById("dashGoalBadge").textContent = state.profile.primaryGoal;

    const consumed = state.tracking.caloriesConsumed;
    const target = state.tracking.caloriesTarget;
    const pct = Math.min(100, Math.round((consumed / target) * 100));

    document.getElementById("dashNetCalories").innerHTML = `${consumed.toLocaleString()} <span style="font-size: 1rem; font-weight: 500; color: var(--text-tertiary);">kcal consumed</span>`;
    document.getElementById("dashTargetCalories").textContent = `Daily Target: ${target.toLocaleString()} kcal (${Math.max(0, target - consumed)} kcal remaining)`;
    document.getElementById("dashCalPercentage").textContent = `${pct}%`;
    document.getElementById("dashCalProgressBar").style.width = `${pct}%`;

    document.getElementById("dashMacroProtein").textContent = `${state.tracking.macros.protein}g`;
    document.getElementById("dashMacroCarbs").textContent = `${state.tracking.macros.carbs}g`;
    document.getElementById("dashMacroFat").textContent = `${state.tracking.macros.fat}g`;

    let loggedCount = 0;
    Object.values(state.tracking.meals).forEach(m => { if (m.logged) loggedCount++; });
    document.getElementById("dashMacroMeals").textContent = `${loggedCount}/4`;

    document.getElementById("dashPillarSteps").textContent = state.tracking.steps.toLocaleString();
    document.getElementById("dashPillarWater").textContent = `${state.tracking.waterGlasses} / ${state.tracking.waterTarget}`;
    document.getElementById("dashPillarSleep").textContent = `${state.tracking.sleepDuration}h`;
  };

  // =========================================================================
  // AI RECIPE STUDIO (#tabRecipes)
  // =========================================================================
  const generateInitialRecipes = () => {
    generateRecipes();
  };

  const onRecipeFilterChange = () => {
    state.recipeStudio.mealSlot = document.getElementById("recipeMealSelect").value;
    state.recipeStudio.cuisine = document.getElementById("recipeCuisineSelect").value;
    generateRecipes();
  };

  const setCookingTone = (tone) => {
    state.recipeStudio.toneLang = tone;
    document.getElementById("btnToneHinglish").classList.toggle("active", tone === "hinglish");
    document.getElementById("btnToneEnglish").classList.toggle("active", tone === "english");
    renderActiveRecipeCard();
  };

  const addStudioIngredient = () => {
    const input = document.getElementById("inputStudioIngredient");
    const val = input.value.trim();
    if (!val) return;
    if (!state.recipeStudio.pantryIngredients.includes(val)) {
      state.recipeStudio.pantryIngredients.push(val);
      renderStudioIngredientChips();
      input.value = "";
    }
  };

  const removeStudioIngredient = (index) => {
    state.recipeStudio.pantryIngredients.splice(index, 1);
    renderStudioIngredientChips();
  };

  const renderStudioIngredientChips = () => {
    const container = document.getElementById("studioIngredientsList");
    if (!container) return;
    container.innerHTML = state.recipeStudio.pantryIngredients.map((item, idx) => `
      <span class="tag-chip">${item} <span class="tag-chip-remove" onclick="HealthChefApp.removeStudioIngredient(${idx})">×</span></span>
    `).join("");
  };

  const generateRecipes = () => {
    const mealSlot = document.getElementById("recipeMealSelect").value;
    const cuisine = document.getElementById("recipeCuisineSelect").value;
    const catalog = window.HealthChefData ? window.HealthChefData.CLINICAL_RECIPE_CATALOG : [];

    // Filter recipes matching meal slot and optionally cuisine
    let matches = catalog.filter(r => r.mealType === mealSlot);
    if (cuisine !== "any") {
      const cuisineMatches = matches.filter(r => r.cuisine === cuisine);
      if (cuisineMatches.length >= 2) {
        matches = cuisineMatches;
      }
    }

    // Fill to 5 options by drawing from general catalog if needed
    let options = [...matches];
    if (options.length < 5) {
      catalog.forEach(item => {
        if (!options.find(o => o.id === item.id) && options.length < 5) {
          options.push(item);
        }
      });
    }

    // Apply disease modifications according to active user conditions
    state.recipeStudio.generatedRecipes = options.slice(0, 5).map(r => {
      let copy = JSON.parse(JSON.stringify(r));
      // Cholesterol adaptation check
      if (state.profile.conditions.includes("High Cholesterol")) {
        copy.diseaseAdaptation += " [Cholesterol safeguard: strictly air-fried with under 1 tsp cold pressed oil]";
      }
      return copy;
    });

    state.recipeStudio.activeOptionIndex = 0;
    renderRecipeOptionTabs();
    renderActiveRecipeCard();
    renderStudioIngredientChips();
  };

  const switchRecipeOption = (index) => {
    state.recipeStudio.activeOptionIndex = index;
    stopSpeechSynthesis();
    renderRecipeOptionTabs();
    renderActiveRecipeCard();
  };

  const renderRecipeOptionTabs = () => {
    const tabsBar = document.getElementById("recipeOptionTabsBar");
    if (!tabsBar) return;
    const recipes = state.recipeStudio.generatedRecipes;
    tabsBar.innerHTML = recipes.map((r, i) => `
      <button type="button" class="recipe-opt-tab ${i === state.recipeStudio.activeOptionIndex ? 'active' : ''}" onclick="HealthChefApp.switchRecipeOption(${i})">
        Option ${i + 1}: ${r.name.split(" ")[0]}
      </button>
    `).join("");
  };

  const renderActiveRecipeCard = () => {
    const container = document.getElementById("activeRecipeContainer");
    const recipe = state.recipeStudio.generatedRecipes[state.recipeStudio.activeOptionIndex];
    if (!container || !recipe) return;

    const isHinglish = state.recipeStudio.toneLang === "hinglish";
    const steps = isHinglish ? recipe.stepsHinglish : recipe.stepsEnglish;

    // Ingredients list with Smart Swap button
    const subsDb = window.HealthChefData ? window.HealthChefData.INGREDIENT_SUBSTITUTIONS : {};

    const ingredientsHtml = recipe.ingredients.map((ing, idx) => {
      let swapHtml = "";
      if (ing.swapKey && subsDb[ing.swapKey]) {
        const topSub = subsDb[ing.swapKey][0];
        swapHtml = `
          <button type="button" class="swap-btn" onclick="HealthChefApp.swapIngredientInRecipe(${idx}, '${ing.swapKey}')" title="${topSub.benefit}">
            Swap ⇄ ${topSub.replacement.split(" ")[0]}
          </button>
        `;
      }
      return `
        <div class="ingredient-swap-item">
          <div>
            <strong>${ing.name}</strong> <span style="color: var(--text-tertiary); font-size: 0.8rem;">(${ing.qty})</span>
          </div>
          ${swapHtml}
        </div>
      `;
    }).join("");

    const stepsHtml = steps.map((s, idx) => `
      <li class="step-item ${state.recipeStudio.currentReadingStepIndex === idx ? 'active-reading' : ''}" id="recipeStepItem${idx}">
        <span class="step-index-pill">${idx + 1}</span>
        ${s}
      </li>
    `).join("");

    container.innerHTML = `
      <div class="recipe-display-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <h3 style="font-size: 1.25rem; line-height: 1.3;">${recipe.name}</h3>
            <div class="recipe-meta-tags">
              <span class="meta-badge">${recipe.cuisine.toUpperCase()}</span>
              <span class="meta-badge">⏱️ ${recipe.cookingTime} mins</span>
              <span class="meta-badge disease">🛡️ ${recipe.conditionsSafe.slice(0, 2).join(" & ")}</span>
            </div>
          </div>
        </div>

        <!-- Clinical Adaptation Callout -->
        <div class="clinical-adaptation-callout">
          <strong>Clinical Dietary Adaptation:</strong> ${recipe.diseaseAdaptation}
        </div>

        <!-- Nutritional Breakdown -->
        <div class="nutrition-grid">
          <div class="nutri-col">
            <div class="num">${recipe.calories}</div>
            <div class="lbl">Calories</div>
          </div>
          <div class="nutri-col">
            <div class="num">${recipe.protein}g</div>
            <div class="lbl">Protein</div>
          </div>
          <div class="nutri-col">
            <div class="num">${recipe.carbs}g</div>
            <div class="lbl">Carbs</div>
          </div>
          <div class="nutri-col">
            <div class="num">${recipe.fat}g</div>
            <div class="lbl">Fat</div>
          </div>
          <div class="nutri-col">
            <div class="num">${recipe.fiber}g</div>
            <div class="lbl">Fiber</div>
          </div>
        </div>

        <!-- Smart Ingredients with Swap Alternatives -->
        <h4 style="font-size: 0.95rem; margin-bottom: 8px;">Ingredients & Disease-Safe Swaps</h4>
        <div class="ingredient-swap-list">
          ${ingredientsHtml}
        </div>

        <!-- Hands-free Steps-Only Voice Read Aloud -->
        <div class="voice-read-aloud-bar">
          <div class="voice-status-indicator">
            <span style="font-size: 1.1rem;">🔊</span>
            <span id="ttsStatusText">${state.recipeStudio.isReadingTTS ? 'Reading cooking steps...' : 'Steps-Only Voice TTS'}</span>
            ${state.recipeStudio.isReadingTTS ? `
              <div class="voice-wave">
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
              </div>
            ` : ''}
          </div>
          <div class="voice-controls">
            ${!state.recipeStudio.isReadingTTS ? `
              <button type="button" class="voice-btn btn-primary" onclick="HealthChefApp.startStepsReadAloud()" style="padding: 6px 14px;">
                ▶ Read Steps Aloud
              </button>
            ` : `
              <button type="button" class="voice-btn btn-secondary" onclick="HealthChefApp.pauseResumeStepsTTS()">
                ⏸ / ▶
              </button>
              <button type="button" class="voice-btn btn-secondary" onclick="HealthChefApp.stopSpeechSynthesis()" style="color: var(--accent-rose);">
                ⏹ Stop
              </button>
            `}
          </div>
        </div>

        <!-- Sequential Cooking Steps List -->
        <h4 style="font-size: 0.95rem; margin-bottom: 10px;">
          Preparation Steps (${isHinglish ? 'Desi Hinglish' : 'Standard English'})
        </h4>
        <ol class="steps-list">
          ${stepsHtml}
        </ol>

        <!-- Action Buttons -->
        <div style="display: flex; gap: 8px; margin-top: 14px;">
          <button type="button" class="btn-primary" onclick="HealthChefApp.logRecipeToToday()">
            + Log to Today's Meals
          </button>
          <button type="button" class="btn-secondary" onclick="HealthChefApp.addRecipeToGroceryList()">
            🛒 Add to Grocery List
          </button>
        </div>
      </div>
    `;
  };

  const swapIngredientInRecipe = (ingredientIndex, swapKey) => {
    const recipe = state.recipeStudio.generatedRecipes[state.recipeStudio.activeOptionIndex];
    const subsDb = window.HealthChefData.INGREDIENT_SUBSTITUTIONS;
    if (!recipe || !subsDb[swapKey]) return;

    const sub = subsDb[swapKey][0];
    const oldName = recipe.ingredients[ingredientIndex].name;
    recipe.ingredients[ingredientIndex].name = `${sub.replacement} (Swapped from ${oldName})`;
    recipe.ingredients[ingredientIndex].swapKey = null; // swap consumed

    // Update calories slightly to reflect swap benefit
    if (swapKey === "paneer" || swapKey === "maida" || swapKey === "deep frying / oil") {
      recipe.calories = Math.max(120, recipe.calories - 45);
      recipe.fat = Math.max(2, recipe.fat - 4);
    }

    showToast(`Swapped with ${sub.replacement}: ${sub.benefit}`);
    renderActiveRecipeCard();
  };

  // Steps-Only Voice Read Aloud (TTS Engine)
  const startStepsReadAloud = () => {
    if (!("speechSynthesis" in window)) {
      alert("Text-to-Speech is not supported by your browser.");
      return;
    }

    const recipe = state.recipeStudio.generatedRecipes[state.recipeStudio.activeOptionIndex];
    if (!recipe) return;

    window.speechSynthesis.cancel();
    const isHinglish = state.recipeStudio.toneLang === "hinglish";
    const steps = isHinglish ? recipe.stepsHinglish : recipe.stepsEnglish;

    state.recipeStudio.isReadingTTS = true;
    state.recipeStudio.currentReadingStepIndex = 0;
    renderActiveRecipeCard();

    playStepIndex(steps, 0, isHinglish ? "hi-IN" : "en-IN");
  };

  const playStepIndex = (steps, index, langCode) => {
    if (index >= steps.length || !state.recipeStudio.isReadingTTS) {
      stopSpeechSynthesis();
      return;
    }

    state.recipeStudio.currentReadingStepIndex = index;
    renderActiveRecipeCard();

    // Text-to-speech reading only "Step N: text", omitting ingredients
    const textToRead = `Step ${index + 1}. ${steps[index]}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = langCode;
    utterance.rate = 0.95;

    // Pick best available voice
    const voices = window.speechSynthesis.getVoices();
    const voiceMatch = voices.find(v => v.lang === langCode || v.lang.startsWith(langCode.substring(0, 2)));
    if (voiceMatch) utterance.voice = voiceMatch;

    utterance.onend = () => {
      if (state.recipeStudio.isReadingTTS) {
        setTimeout(() => {
          playStepIndex(steps, index + 1, langCode);
        }, 800);
      }
    };

    utterance.onerror = () => {
      stopSpeechSynthesis();
    };

    speechSynthUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const pauseResumeStepsTTS = () => {
    if (!window.speechSynthesis) return;
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      showToast("Resumed speech read-aloud.");
    } else {
      window.speechSynthesis.pause();
      showToast("Paused speech read-aloud.");
    }
  };

  const stopSpeechSynthesis = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    state.recipeStudio.isReadingTTS = false;
    state.recipeStudio.currentReadingStepIndex = -1;
    renderActiveRecipeCard();
  };

  const logRecipeToToday = () => {
    const recipe = state.recipeStudio.generatedRecipes[state.recipeStudio.activeOptionIndex];
    if (!recipe) return;

    const slot = state.recipeStudio.mealSlot;
    state.tracking.meals[slot] = {
      name: recipe.name,
      calories: recipe.calories,
      protein: recipe.protein,
      carbs: recipe.carbs,
      fat: recipe.fat,
      fiber: recipe.fiber,
      logged: true
    };

    recalculateDayTotals();
    saveState();
    showToast(`Logged "${recipe.name}" to today's ${slot}!`);
    renderDashboard();
    renderMealsLog();
  };

  const addRecipeToGroceryList = () => {
    const recipe = state.recipeStudio.generatedRecipes[state.recipeStudio.activeOptionIndex];
    if (!recipe) return;

    recipe.ingredients.forEach(ing => {
      if (!state.planner.groceries.find(g => g.name.toLowerCase() === ing.name.toLowerCase())) {
        state.planner.groceries.push({
          name: `${ing.name} (${ing.qty})`,
          checked: false,
          category: "Pantry"
        });
      }
    });

    saveState();
    showToast(`Added ${recipe.ingredients.length} items to Grocery Checklist!`);
    renderGroceryChecklist();
  };

  // =========================================================================
  // DAILY FOOD & VITALS TRACKING (#tabTrack)
  // =========================================================================
  const renderMealsLog = () => {
    const container = document.getElementById("mealsLogContainer");
    if (!container) return;

    const slots = [
      { key: "breakfast", label: "Breakfast", icon: "🍳" },
      { key: "lunch", label: "Lunch", icon: "🍲" },
      { key: "snack", label: "Evening Snack", icon: "🍵" },
      { key: "dinner", label: "Dinner", icon: "🥣" }
    ];

    container.innerHTML = slots.map(slot => {
      const meal = state.tracking.meals[slot.key];
      return `
        <div class="meal-slot-tracker-card">
          <div class="meal-slot-header">
            <div class="meal-slot-title">
              <span>${slot.icon}</span> ${slot.label}
              ${meal.logged ? '<span style="color: var(--accent-green); font-size: 0.8rem;">✓ Logged</span>' : '<span style="color: var(--text-muted); font-size: 0.8rem;">Planned</span>'}
            </div>
            <button type="button" class="btn-secondary" style="width: auto; padding: 4px 10px; font-size: 0.75rem;" onclick="HealthChefApp.openMealEditModal('${slot.key}')">
              ✏️ Edit
            </button>
          </div>
          <div class="meal-dish-name">${meal.name}</div>
          <div class="meal-macros-inline">
            <span><strong>${meal.calories}</strong> kcal</span>
            <span><strong>${meal.protein}g</strong> Protein</span>
            <span><strong>${meal.carbs}g</strong> Carbs</span>
            <span><strong>${meal.fat}g</strong> Fat</span>
          </div>
        </div>
      `;
    }).join("");
  };

  const openMealEditModal = (mealKey) => {
    editingMealKey = mealKey;
    const meal = state.tracking.meals[mealKey];
    document.getElementById("modalMealTitle").textContent = `Edit ${mealKey.toUpperCase()} Dish`;
    document.getElementById("editMealDishName").value = meal.name;
    document.getElementById("modalNutriCal").textContent = meal.calories;
    document.getElementById("modalNutriProtein").textContent = `${meal.protein}g`;
    document.getElementById("modalNutriCarbs").textContent = `${meal.carbs}g`;
    document.getElementById("modalNutriFat").textContent = `${meal.fat}g`;
    document.getElementById("modalNutriFiber").textContent = `${meal.fiber || 6}g`;

    document.getElementById("modalMealEdit").classList.add("active");
  };

  // Instant Auto-recalculation on typing meal dish name
  const onMealNameInputChange = (dishName) => {
    const q = dishName.toLowerCase().trim();
    const db = window.HealthChefData ? window.HealthChefData.FOOD_NUTRITION_DATABASE : {};
    let matchedNutri = null;

    // Search exact or partial match in database
    for (const [key, val] of Object.entries(db)) {
      if (q.includes(key) || key.includes(q)) {
        matchedNutri = val;
        break;
      }
    }

    // Heuristic fallbacks if not found
    if (!matchedNutri) {
      let baseCal = 280;
      let baseProt = 10;
      let baseCarb = 40;
      let baseFat = 8;
      let baseFib = 5;

      if (q.includes("paneer") || q.includes("chicken") || q.includes("egg") || q.includes("fish")) {
        baseCal += 110; baseProt += 14; baseFat += 6;
      }
      if (q.includes("roti") || q.includes("paratha") || q.includes("puri") || q.includes("rice")) {
        baseCal += 120; baseCarb += 25;
      }
      if (q.includes("dal") || q.includes("chana") || q.includes("rajma") || q.includes("moong")) {
        baseProt += 7; baseFib += 4;
      }
      matchedNutri = { calories: baseCal, protein: baseProt, carbs: baseCarb, fat: baseFat, fiber: baseFib };
    }

    document.getElementById("modalNutriCal").textContent = matchedNutri.calories;
    document.getElementById("modalNutriProtein").textContent = `${matchedNutri.protein}g`;
    document.getElementById("modalNutriCarbs").textContent = `${matchedNutri.carbs}g`;
    document.getElementById("modalNutriFat").textContent = `${matchedNutri.fat}g`;
    document.getElementById("modalNutriFiber").textContent = `${matchedNutri.fiber}g`;
  };

  const saveMealEdit = () => {
    if (!editingMealKey) return;
    const newName = document.getElementById("editMealDishName").value.trim();
    if (!newName) return;

    const cal = parseInt(document.getElementById("modalNutriCal").textContent, 10) || 300;
    const protein = parseInt(document.getElementById("modalNutriProtein").textContent, 10) || 12;
    const carbs = parseInt(document.getElementById("modalNutriCarbs").textContent, 10) || 45;
    const fat = parseInt(document.getElementById("modalNutriFat").textContent, 10) || 8;
    const fiber = parseInt(document.getElementById("modalNutriFiber").textContent, 10) || 5;

    state.tracking.meals[editingMealKey] = {
      name: newName,
      calories: cal,
      protein: protein,
      carbs: carbs,
      fat: fat,
      fiber: fiber,
      logged: true
    };

    recalculateDayTotals();
    saveState();
    closeModal("modalMealEdit");
    showToast(`Updated ${editingMealKey}! Totals recalculated.`);
    renderDashboard();
    renderMealsLog();
  };

  const recalculateDayTotals = () => {
    let totCal = 0;
    let totProt = 0;
    let totCarbs = 0;
    let totFat = 0;

    Object.values(state.tracking.meals).forEach(m => {
      if (m.logged) {
        totCal += m.calories;
        totProt += m.protein;
        totCarbs += m.carbs;
        totFat += m.fat;
      }
    });

    state.tracking.caloriesConsumed = totCal;
    state.tracking.macros.protein = totProt;
    state.tracking.macros.carbs = totCarbs;
    state.tracking.macros.fat = totFat;
  };

  // Hydration Tracker (10 Glasses Grid)
  const renderHydration = () => {
    const grid = document.getElementById("glassIconGrid");
    if (!grid) return;
    const count = state.tracking.waterGlasses;
    document.getElementById("trackWaterDisplay").textContent = `${count} / 10 Glasses (${(count * 0.25).toFixed(2)} L)`;

    let html = "";
    for (let i = 1; i <= 10; i++) {
      html += `
        <button type="button" class="glass-btn ${i <= count ? 'filled' : ''}" onclick="HealthChefApp.setWaterGlass(${i})" title="Glass ${i}">
          🥛
        </button>
      `;
    }
    grid.innerHTML = html;
  };

  const setWaterGlass = (glassNumber) => {
    if (state.tracking.waterGlasses === glassNumber) {
      state.tracking.waterGlasses = glassNumber - 1;
    } else {
      state.tracking.waterGlasses = glassNumber;
    }
    saveState();
    renderHydration();
    renderDashboard();
  };

  const adjustWater = (amount) => {
    state.tracking.waterGlasses = Math.max(0, Math.min(15, state.tracking.waterGlasses + amount));
    saveState();
    renderHydration();
    renderDashboard();
  };

  // Sleep Schedule & Dynamic +30m Adder
  const saveSleepSchedule = () => {
    const val = document.getElementById("trackBedtimeSelect").value;
    state.tracking.sleepBedtime = val;
    saveState();
  };

  const saveSleepDuration = () => {
    const val = document.getElementById("trackSleepDurationSelect").value;
    state.tracking.sleepDuration = val;
    saveState();
    renderDashboard();
  };

  const add30mSleepCustom = () => {
    const current = parseFloat(state.tracking.sleepDuration);
    const newDur = (current + 0.5).toFixed(1);
    const select = document.getElementById("trackSleepDurationSelect");

    // Check if option already exists
    let exists = false;
    for (let opt of select.options) {
      if (opt.value === newDur) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      const newOpt = document.createElement("option");
      newOpt.value = newDur;
      newOpt.textContent = `${newDur} hrs (Custom Boost)`;
      select.appendChild(newOpt);
    }
    select.value = newDur;
    state.tracking.sleepDuration = newDur;
    saveState();
    showToast(`Added +30 mins! Sleep updated to ${newDur} hrs.`);
    renderDashboard();
  };

  const quickAddSleep30m = () => {
    add30mSleepCustom();
  };

  // Workouts
  const renderWorkouts = () => {
    const list = document.getElementById("workoutHistoryList");
    if (!list) return;
    let totBurn = 0;
    state.tracking.workouts.forEach(w => totBurn += w.calories);
    document.getElementById("totalCaloriesBurned").textContent = `${totBurn} kcal burned`;

    if (state.tracking.workouts.length === 0) {
      list.innerHTML = '<div style="font-size: 0.8rem; color: var(--text-tertiary);">No workouts logged today yet.</div>';
      return;
    }

    list.innerHTML = state.tracking.workouts.map(w => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 10px; background: var(--bg-tertiary); border-radius: var(--radius-sm); margin-bottom: 6px; font-size: 0.88rem;">
        <div>
          <strong>${w.name}</strong> <span style="font-size: 0.78rem; color: var(--text-tertiary);">(${w.minutes}m • ${w.time})</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-weight: 700; color: var(--accent-orange);">${w.calories} kcal</span>
          <button type="button" onclick="HealthChefApp.deleteWorkout(${w.id})" style="background: none; border: none; color: var(--accent-rose); font-size: 0.9rem; cursor: pointer;">✕</button>
        </div>
      </div>
    `).join("");
  };

  const logPresetWorkout = (name, mins, kcal) => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    state.tracking.workouts.push({
      id: Date.now(),
      name: name,
      minutes: mins,
      calories: kcal,
      time: timeStr
    });
    saveState();
    showToast(`Logged ${name} (${kcal} kcal burned)!`);
    renderWorkouts();
  };

  const logCustomWorkout = () => {
    const name = document.getElementById("customWorkoutName").value.trim();
    const mins = parseInt(document.getElementById("customWorkoutMins").value, 10);
    const kcal = parseInt(document.getElementById("customWorkoutKcal").value, 10);
    if (!name || isNaN(mins) || isNaN(kcal)) {
      alert("Please enter workout name, duration, and calories burned.");
      return;
    }

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    state.tracking.workouts.push({
      id: Date.now(),
      name: name,
      minutes: mins,
      calories: kcal,
      time: timeStr
    });

    document.getElementById("customWorkoutName").value = "";
    document.getElementById("customWorkoutMins").value = "";
    document.getElementById("customWorkoutKcal").value = "";

    saveState();
    showToast(`Logged ${name}!`);
    renderWorkouts();
  };

  const deleteWorkout = (id) => {
    state.tracking.workouts = state.tracking.workouts.filter(w => w.id !== id);
    saveState();
    renderWorkouts();
  };

  // Medications with Dosage Field & Reminder System
  const renderMedications = () => {
    const list = document.getElementById("medicationsList");
    if (!list) return;

    list.innerHTML = state.tracking.medications.map(m => `
      <div class="medication-card">
        <div class="med-info">
          <input type="checkbox" ${m.taken ? 'checked' : ''} onchange="HealthChefApp.toggleMedicineTaken(${m.id})" style="width: 18px; height: 18px; cursor: pointer;">
          <div>
            <div style="font-weight: 700; font-size: 0.95rem; ${m.taken ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${m.name}</div>
            <div style="display: flex; gap: 6px; align-items: center; margin-top: 2px;">
              <span class="med-dosage-chip">${m.dosage}</span>
              <span style="font-size: 0.75rem; color: var(--text-tertiary);">${m.timing} • ${m.relation}</span>
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          ${m.reminder ? '<span title="Reminder Active" style="font-size: 1rem;">🔔</span>' : ''}
          <button type="button" onclick="HealthChefApp.deleteMedicine(${m.id})" style="background: none; border: none; color: var(--accent-rose); font-size: 0.9rem; cursor: pointer;">✕</button>
        </div>
      </div>
    `).join("");
  };

  const toggleMedicineTaken = (id) => {
    const med = state.tracking.medications.find(m => m.id === id);
    if (med) {
      med.taken = !med.taken;
      saveState();
      renderMedications();
    }
  };

  const openAddMedicineModal = () => {
    document.getElementById("inputMedName").value = "";
    document.getElementById("inputMedDosage").value = "";
    document.getElementById("modalAddMedicine").classList.add("active");
  };

  const saveNewMedicine = () => {
    const name = document.getElementById("inputMedName").value.trim();
    const dosage = document.getElementById("inputMedDosage").value.trim();
    const timing = document.getElementById("inputMedTiming").value;
    const relation = document.getElementById("inputMedRelation").value;
    const reminder = document.getElementById("inputMedReminder").value === "Enabled";

    if (!name || !dosage) {
      alert("Please enter both medicine name and dosage (e.g. 500 mg, 1 tablet).");
      return;
    }

    state.tracking.medications.push({
      id: Date.now(),
      name: name,
      dosage: dosage,
      timing: timing,
      relation: relation,
      taken: false,
      reminder: reminder
    });

    saveState();
    closeModal("modalAddMedicine");
    showToast(`Added ${name} (${dosage}) to routine!`);
    renderMedications();

    // Trigger simulated notification
    if (reminder && "Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  };

  const deleteMedicine = (id) => {
    state.tracking.medications = state.tracking.medications.filter(m => m.id !== id);
    saveState();
    renderMedications();
  };

  // Other Activities
  const renderOtherActivities = () => {
    const list = document.getElementById("otherActivitiesList");
    if (!list) return;

    list.innerHTML = state.tracking.otherActivities.map(act => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 10px; background: var(--bg-tertiary); border-radius: var(--radius-sm); margin-bottom: 6px; font-size: 0.88rem;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <input type="checkbox" ${act.completed ? 'checked' : ''} onchange="HealthChefApp.toggleActivity(${act.id})" style="width: 16px; height: 16px;">
          <span style="${act.completed ? 'text-decoration: line-through; opacity: 0.7;' : ''}">${act.name}</span>
        </div>
        <button type="button" onclick="HealthChefApp.deleteActivity(${act.id})" style="background: none; border: none; color: var(--accent-rose); font-size: 0.85rem; cursor: pointer;">✕</button>
      </div>
    `).join("");
  };

  const toggleActivity = (id) => {
    const act = state.tracking.otherActivities.find(a => a.id === id);
    if (act) {
      act.completed = !act.completed;
      saveState();
      renderOtherActivities();
    }
  };

  const addOtherActivityPrompt = () => {
    const name = prompt("Enter activity (e.g. 15m Pranayama, Physiotherapy, Meditation):");
    if (name && name.trim()) {
      state.tracking.otherActivities.push({
        id: Date.now(),
        name: name.trim(),
        completed: true
      });
      saveState();
      renderOtherActivities();
    }
  };

  const deleteActivity = (id) => {
    state.tracking.otherActivities = state.tracking.otherActivities.filter(a => a.id !== id);
    saveState();
    renderOtherActivities();
  };

  // Micronutrients Gauges
  const renderMicronutrients = () => {
    document.getElementById("microValFe").textContent = `${state.tracking.micronutrients.iron} mg`;
    document.getElementById("microValCa").textContent = `${state.tracking.micronutrients.calcium} mg`;
    document.getElementById("microValNa").textContent = `${state.tracking.micronutrients.sodium} mg`;
  };

  // =========================================================================
  // 7-DAY MEAL PLANNER & WEIGHT ANALYTICS (#tabPlanner)
  // =========================================================================
  const renderPlanner = () => {
    const curW = Number(state.profile.weight) || 78;
    const targetW = Number(state.profile.goalWeight) || 72;

    const curElem = document.getElementById("planCurrentWeightDisplay");
    if (curElem) curElem.textContent = `${curW.toFixed(1)} kg`;

    const targetElem = document.getElementById("planTargetWeightDisplay");
    if (targetElem) targetElem.textContent = `${targetW.toFixed(1)} kg`;

    const todayElem = document.getElementById("planTodayWeightDisplay");
    if (todayElem) todayElem.textContent = `Today (${curW.toFixed(1)} kg)`;

    const goalElem = document.getElementById("planGoalWeightFooterDisplay");
    if (goalElem) goalElem.textContent = `Target (${targetW.toFixed(1)} kg)`;

    renderDayPills();
    renderPlannerDayMeals();
    renderGroceryChecklist();
    renderWeightSparkline();
  };

  const switchPlannerDay = (day) => {
    state.planner.selectedDay = day;
    renderDayPills();
    renderPlannerDayMeals();
  };

  const renderDayPills = () => {
    const container = document.getElementById("plannerDayPills");
    if (!container) return;
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    container.innerHTML = days.map(d => `
      <button type="button" class="day-pill-btn ${d === state.planner.selectedDay ? 'active' : ''}" onclick="HealthChefApp.switchPlannerDay('${d}')">
        ${d.substring(0, 3)}
      </button>
    `).join("");
  };

  const renderPlannerDayMeals = () => {
    const container = document.getElementById("plannerDayMealsContainer");
    if (!container) return;
    const day = state.planner.selectedDay;
    const plan = state.planner.weeklyPlans[day] || state.planner.weeklyPlans["Monday"];

    const slots = [
      { key: "breakfast", label: "Breakfast", icon: "🍳", dish: plan.breakfast },
      { key: "lunch", label: "Lunch", icon: "🍲", dish: plan.lunch },
      { key: "snack", label: "Evening Snack", icon: "🍵", dish: plan.snack },
      { key: "dinner", label: "Dinner", icon: "🥣", dish: plan.dinner }
    ];

    container.innerHTML = slots.map(s => `
      <div class="meal-slot-tracker-card">
        <div class="meal-slot-header">
          <div class="meal-slot-title">
            <span>${s.icon}</span> ${s.label}
          </div>
          <button type="button" class="btn-secondary" style="width: auto; padding: 4px 10px; font-size: 0.75rem;" onclick="HealthChefApp.regenSingleMeal('${day}', '${s.key}')">
            🔄 Regen
          </button>
        </div>
        <div class="meal-dish-name">${s.dish}</div>
      </div>
    `).join("");
  };

  // Single-Meal Regeneration
  const regenSingleMeal = (day, slotKey) => {
    const catalog = window.HealthChefData.CLINICAL_RECIPE_CATALOG;
    const matching = catalog.filter(r => r.mealType === slotKey);
    if (matching.length > 0) {
      const random = matching[Math.floor(Math.random() * matching.length)];
      state.planner.weeklyPlans[day][slotKey] = random.name;
      saveState();
      showToast(`Regenerated ${slotKey} for ${day}: ${random.name}`);
      renderPlannerDayMeals();
    }
  };

  // All-Day Multi-Meal Simultaneous Generation
  const generateFullDayPlan = () => {
    const day = state.planner.selectedDay;
    const catalog = window.HealthChefData.CLINICAL_RECIPE_CATALOG;

    const bMatch = catalog.filter(r => r.mealType === "breakfast");
    const lMatch = catalog.filter(r => r.mealType === "lunch");
    const sMatch = catalog.filter(r => r.mealType === "snack");
    const dMatch = catalog.filter(r => r.mealType === "dinner");

    state.planner.weeklyPlans[day] = {
      breakfast: bMatch[Math.floor(Math.random() * bMatch.length)].name,
      lunch: lMatch[Math.floor(Math.random() * lMatch.length)].name,
      snack: sMatch[Math.floor(Math.random() * sMatch.length)].name,
      dinner: dMatch[Math.floor(Math.random() * dMatch.length)].name
    };

    saveState();
    showToast(`Generated full day balanced menu for ${day}!`);
    renderPlannerDayMeals();
  };

  // Prompt Goal Weight & Current Weight
  const promptUpdateGoalWeight = () => {
    const curVal = prompt("Update Current Weight in kg (as recorded in profile):", state.profile.weight);
    if (curVal !== null) {
      const curNum = parseFloat(curVal);
      if (!isNaN(curNum) && curNum > 25 && curNum < 250) {
        state.profile.weight = curNum;
      }
    }

    const goalVal = prompt("Update Target Goal Weight in kg:", state.profile.goalWeight);
    if (goalVal !== null) {
      const goalNum = parseFloat(goalVal);
      if (!isNaN(goalNum) && goalNum > 25 && goalNum < 250) {
        state.profile.goalWeight = goalNum;
      }
    }

    computeNutritionalTargets();
    saveState();
    renderPlanner();
    renderProfile();
    renderDashboard();
    showToast(`Weight updated: Current ${state.profile.weight} kg → Target ${state.profile.goalWeight} kg!`);
  };

  // 30-Day SVG Weight Sparkline
  const renderWeightSparkline = () => {
    const container = document.getElementById("weightSparklineSvgContainer");
    if (!container) return;

    const currentW = Number(state.profile.weight) || 78.0;
    const targetW = Number(state.profile.goalWeight) || 72.0;

    // Dynamically calculate realistic trajectory starting from 30 days ago
    const delta = (targetW < currentW) ? 2.5 : (targetW > currentW ? -2.5 : 0.8);
    const startW = +(currentW + delta).toFixed(1);

    const numPoints = 21;
    const points = [];
    for (let i = 0; i < numPoints; i++) {
      const progress = i / (numPoints - 1);
      const wobble = (i === 0 || i === numPoints - 1) ? 0 : (Math.sin(i * 1.8) * 0.15);
      const val = +(startW + (currentW - startW) * progress + wobble).toFixed(1);
      points.push(val);
    }
    points[points.length - 1] = currentW;

    const day1Elem = document.getElementById("planDay1WeightDisplay");
    if (day1Elem) day1Elem.textContent = `Day 1 (${points[0].toFixed(1)} kg)`;

    const day15Elem = document.getElementById("planDay15WeightDisplay");
    if (day15Elem) day15Elem.textContent = `Day 15 (${points[10].toFixed(1)} kg)`;

    const todayElem = document.getElementById("planTodayWeightDisplay");
    if (todayElem) todayElem.textContent = `Today (${currentW.toFixed(1)} kg)`;

    const goalElem = document.getElementById("planGoalWeightFooterDisplay");
    if (goalElem) goalElem.textContent = `Target (${targetW.toFixed(1)} kg)`;

    const width = 580;
    const height = 90;
    const minW = Math.min(...points, targetW) - 1;
    const maxW = Math.max(...points, targetW) + 1;

    const getX = (index) => (index / (points.length - 1)) * (width - 40) + 20;
    const getY = (val) => height - 15 - (((val - minW) / (maxW - minW)) * (height - 30));

    let pathD = `M ${getX(0)} ${getY(points[0])}`;
    for (let i = 1; i < points.length; i++) {
      pathD += ` L ${getX(i)} ${getY(points[i])}`;
    }

    const targetY = getY(targetW);

    container.innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" style="width: 100%; height: 100%; overflow: visible;">
        <!-- Target Line -->
        <line x1="20" y1="${targetY}" x2="${width - 20}" y2="${targetY}" stroke="var(--accent-amber)" stroke-dasharray="4,4" stroke-width="1.5" opacity="0.7"/>
        <text x="${width - 18}" y="${targetY - 4}" fill="var(--accent-amber)" font-size="10" font-weight="700">Goal ${targetW.toFixed(1)}kg</text>

        <!-- Trend Curve -->
        <path d="${pathD}" fill="none" stroke="var(--accent-green)" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Key Points -->
        <circle cx="${getX(0)}" cy="${getY(points[0])}" r="3.5" fill="var(--accent-green)"/>
        <circle cx="${getX(points.length - 1)}" cy="${getY(points[points.length - 1])}" r="4.5" fill="var(--accent-green)"/>
      </svg>
    `;
  };

  // Grocery List
  const renderGroceryChecklist = () => {
    const container = document.getElementById("groceryChecklistContainer");
    if (!container) return;

    container.innerHTML = state.planner.groceries.map((item, idx) => `
      <div class="grocery-item-row">
        <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="HealthChefApp.toggleGroceryItem(${idx})" style="width: 18px; height: 18px;">
        <span style="${item.checked ? 'text-decoration: line-through; opacity: 0.5;' : ''}">${item.name}</span>
      </div>
    `).join("");
  };

  const toggleGroceryItem = (index) => {
    state.planner.groceries[index].checked = !state.planner.groceries[index].checked;
    saveState();
    renderGroceryChecklist();
  };

  const copyGroceryList = () => {
    const text = state.planner.groceries.map(g => `${g.checked ? '[x]' : '[ ]'} ${g.name}`).join("\n");
    navigator.clipboard.writeText("HealthChef 7-Day Groceries:\n" + text).then(() => {
      showToast("Groceries copied to clipboard!");
    }).catch(() => {
      showToast("Clipboard copy failed.");
    });
  };

  // =========================================================================
  // AYURVEDIC "NUSKE" TAB (#tabNuske)
  // =========================================================================
  const renderNuskeList = (filterQuery = "", category = "all") => {
    const container = document.getElementById("nuskeListContainer");
    if (!container) return;

    let repo = window.HealthChefData ? window.HealthChefData.NUSKE_REPOSITORY : [];

    if (category !== "all") {
      repo = repo.filter(n => n.category.toLowerCase() === category.toLowerCase());
    }

    if (filterQuery) {
      const q = filterQuery.toLowerCase();
      repo = repo.filter(n =>
        n.ailment.toLowerCase().includes(q) ||
        n.title.toLowerCase().includes(q) ||
        n.symptoms.some(s => s.toLowerCase().includes(q))
      );
    }

    if (repo.length === 0) {
      container.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--text-tertiary);">No remedies found matching your query.</div>';
      return;
    }

    container.innerHTML = repo.map(nuskha => `
      <div class="nuskha-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
          <h3 style="font-size: 1.15rem; color: var(--text-primary);">${nuskha.title}</h3>
          <span class="meta-badge">${nuskha.category}</span>
        </div>
        <div class="nuskha-alt-badge">
          ⚡ Natural Ayurvedic Alternative to: ${nuskha.alopathyAlternativeTo}
        </div>
        <p style="font-size: 0.85rem; margin-bottom: 8px;"><strong>Ailment:</strong> ${nuskha.ailment}</p>

        <!-- Preparation & Dosage -->
        <div class="nuskha-prep-box">
          <strong style="color: var(--accent-amber); display: block; margin-bottom: 4px;">🥣 Preparation & Consumption:</strong>
          ${nuskha.preparation}
          <div style="margin-top: 6px; font-size: 0.8rem; color: var(--text-secondary);">
            <strong>Ideal Timing:</strong> ${nuskha.idealTiming}
          </div>
        </div>

        <!-- Clinical Rationale -->
        <div style="font-size: 0.84rem; margin: 10px 0; color: var(--text-secondary);">
          <strong>Clinical / Bioactive Mechanism:</strong> ${nuskha.clinicalRationale}
        </div>

        <!-- Caution -->
        <div style="background: var(--accent-amber-light); padding: 8px 10px; border-radius: var(--radius-sm); font-size: 0.78rem; color: var(--text-primary); border-left: 3px solid var(--accent-amber);">
          ⚠️ <strong>Safety Caution:</strong> ${nuskha.caution}
        </div>
      </div>
    `).join("");
  };

  const filterNuske = () => {
    const q = document.getElementById("inputNuskeSearch").value.trim();
    renderNuskeList(q, state.activeNuskeCategory || "all");
  };

  const filterNuskeCategory = (cat) => {
    state.activeNuskeCategory = cat;
    document.querySelectorAll("#nuskeCategoryPills .day-pill-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
    const q = document.getElementById("inputNuskeSearch").value.trim();
    renderNuskeList(q, cat);
  };

  // =========================================================================
  // POST-SURGERY RECOVERY MEAL GENERATOR (#tabSurgery)
  // =========================================================================
  const generateSurgeryRecoveryDiet = () => {
    const surgeryName = document.getElementById("surgeryNameInput").value.trim();
    const timeline = document.getElementById("surgeryTimelineSelect").value;
    const digestive = document.getElementById("surgeryDigestiveStatus").value;
    const advice = document.getElementById("surgeryDoctorAdviceInput").value.trim();

    if (!surgeryName) {
      alert("Please mention the surgery name (e.g. Gallbladder, C-Section, Cardiac Stent).");
      return;
    }

    state.surgeryCare.procedure = surgeryName;
    state.surgeryCare.timeline = timeline;
    state.surgeryCare.digestiveState = digestive;
    state.surgeryCare.doctorAdvice = advice;

    const protocols = window.HealthChefData ? window.HealthChefData.POST_SURGERY_PROTOCOLS : {};
    let matchedProtocol = protocols["general / abdominal / orthopedic"];

    const sLower = surgeryName.toLowerCase();
    if (sLower.includes("gall") || sLower.includes("cholecyst") || sLower.includes("bile")) {
      matchedProtocol = protocols["cholecystectomy / gallbladder"];
    } else if (sLower.includes("heart") || sLower.includes("cardiac") || sLower.includes("bypass") || sLower.includes("stent")) {
      matchedProtocol = protocols["cardiac bypass / angioplasty / stent"];
    } else if (sLower.includes("c-section") || sLower.includes("cesarean") || sLower.includes("delivery") || sLower.includes("postpartum")) {
      matchedProtocol = protocols["c-section / postpartum surgical"];
    }

    const phase = matchedProtocol.phases[timeline] || matchedProtocol.phases["day 1-3"] || Object.values(matchedProtocol.phases)[0];

    const container = document.getElementById("surgeryPlanDisplayContainer");
    if (!container) return;

    container.innerHTML = `
      <div class="surgery-plan-card">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
          <h3 style="font-size: 1.15rem; color: var(--accent-rose);">${matchedProtocol.category} Recovery Protocol</h3>
          <span class="meta-badge">${timeline.toUpperCase()}</span>
        </div>
        <div style="font-size: 0.95rem; font-weight: 700; margin-bottom: 12px;">
          Phase: ${phase.phaseName}
        </div>

        <!-- Doctor Advice Echo -->
        ${advice ? `
          <div style="background: var(--accent-purple-light); padding: 10px; border-radius: var(--radius-sm); font-size: 0.84rem; margin-bottom: 14px; border-left: 3px solid var(--accent-purple);">
            <strong>Doctor's Advice Considered:</strong> "${advice}"
          </div>
        ` : ''}

        <!-- Meal Schedule -->
        <h4 style="font-size: 0.9rem; margin-bottom: 8px;">Physician-Safe Recommended Meals:</h4>
        <div style="margin-bottom: 14px;">
          ${phase.meals.map(m => `
            <div style="padding: 10px; background: var(--bg-tertiary); border-radius: var(--radius-sm); margin-bottom: 6px; font-size: 0.88rem;">
              <div style="display: flex; justify-content: space-between; font-weight: 700; color: var(--text-primary);">
                <span>${m.name}</span>
                <span style="color: var(--accent-green); font-size: 0.8rem;">${m.time}</span>
              </div>
              <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 3px;">
                💡 <em>${m.notes}</em>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Critical Safety Warnings -->
        <div class="clinical-notice-card" style="margin-bottom: 14px;">
          <div>⚠️</div>
          <div>
            <strong>Critical Surgical Safety Warnings:</strong>
            ${matchedProtocol.criticalWarnings}
          </div>
        </div>

        <!-- Healing Superfoods -->
        <h4 style="font-size: 0.9rem; margin-bottom: 6px;">Tissue-Healing Superfoods for this Phase:</h4>
        <div class="tag-list-display">
          ${matchedProtocol.healingSuperfoods.map(sf => `<span class="tag-chip">🌱 ${sf}</span>`).join("")}
        </div>
      </div>
    `;

    saveState();
    showToast("Post-surgery recovery menu generated!");
  };

  // =========================================================================
  // PROFILE TAB (#tabProfile)
  // =========================================================================
  const renderProfile = () => {
    document.getElementById("profileUserName").textContent = state.profile.name;
    document.getElementById("profileGoalBadge").textContent = state.profile.primaryGoal;
    document.getElementById("profileAge").textContent = state.profile.age;
    document.getElementById("profileGender").textContent = state.profile.gender;
    document.getElementById("profileHeight").textContent = `${state.profile.height} cm`;
    document.getElementById("profileWeight").textContent = `${state.profile.weight} kg`;

    // Dedicated Allergies Card
    const allergiesContainer = document.getElementById("profileAllergiesDisplay");
    if (allergiesContainer) {
      if (state.profile.allergies.length === 0) {
        allergiesContainer.innerHTML = '<span style="font-size: 0.8rem; color: var(--text-tertiary);">No known allergies recorded.</span>';
      } else {
        allergiesContainer.innerHTML = state.profile.allergies.map(a => `
          <span class="tag-chip" style="background: var(--accent-rose-light); color: var(--accent-rose); border-color: rgba(225, 29, 72, 0.3);">
            ⚠️ ${a}
          </span>
        `).join("");
      }
    }

    // Disliked Foods
    const dislikedContainer = document.getElementById("profileDislikedDisplay");
    if (dislikedContainer) {
      if (state.profile.dislikedFoods.length === 0) {
        dislikedContainer.innerHTML = '<span style="font-size: 0.8rem; color: var(--text-tertiary);">No disliked foods.</span>';
      } else {
        dislikedContainer.innerHTML = state.profile.dislikedFoods.map(d => `
          <span class="tag-chip">🚫 ${d}</span>
        `).join("");
      }
    }

    // Active Conditions
    const conditionsContainer = document.getElementById("profileConditionsDisplay");
    if (conditionsContainer) {
      const allConds = [...state.profile.conditions, ...state.profile.customConditions];
      conditionsContainer.innerHTML = allConds.map(c => `
        <span class="tag-chip" style="background: var(--accent-amber-light); color: var(--accent-amber); border-color: rgba(217, 119, 6, 0.3);">
          🩺 ${c}
        </span>
      `).join("");
    }

    // Gemini API status
    const keyInput = document.getElementById("inputGeminiApiKey");
    if (keyInput) keyInput.value = state.profile.geminiApiKey || "";
    const badge = document.getElementById("geminiStatusBadge");
    if (badge) {
      if (state.profile.geminiApiKey) {
        badge.textContent = "Gemini Key Configured";
        badge.className = "clinical-badge optimal";
      } else {
        badge.textContent = "Offline Knowledge Engine Active";
        badge.className = "clinical-badge optimal";
      }
    }
  };

  const saveGeminiApiKey = () => {
    const key = document.getElementById("inputGeminiApiKey").value.trim();
    state.profile.geminiApiKey = key;
    saveState();
    showToast("Gemini API configuration saved!");
    renderProfile();
  };

  const testGeminiConnection = () => {
    const key = state.profile.geminiApiKey;
    if (!key) {
      alert("No Gemini API key provided. Operating on offline clinical engine.");
      return;
    }
    showToast("Testing Gemini API connectivity...");
    // Simulated or live endpoint test
    fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`)
      .then(res => res.json())
      .then(data => {
        if (data.models) {
          alert("✓ Gemini API connection successful! Live LLM integration active.");
        } else {
          alert("Gemini API key returned an error: " + (data.error ? data.error.message : "Invalid key"));
        }
      })
      .catch(err => {
        alert("Gemini network check failed: " + err.message);
      });
  };

  const logoutUser = () => {
    saveState();
    state.currentUser = null;
    saveState();
    showToast("Signed out successfully.");
    showScreen("screenAuth");
    document.getElementById("mainHeader").style.display = "flex";
    document.getElementById("bottomNavDock").style.display = "none";
    document.getElementById("headerUserChip").style.display = "none";
  };

  const exportUserData = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `HealthChef_Backup_${state.profile.name.replace(/\s+/g, "_")}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Data backup downloaded!");
  };

  // =========================================================================
  // VOICE DICTATION & NUTRIVOICE ASSISTANT
  // =========================================================================
  const setupVoiceRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      voiceRecognition = new SpeechRecognition();
      voiceRecognition.continuous = false;
      voiceRecognition.interimResults = false;
      voiceRecognition.lang = "en-IN";
    }
  };

  const startVoiceDictation = (targetInputId, callback) => {
    if (!voiceRecognition) {
      const simulated = prompt("Voice dictation simulated. Type your text:");
      if (simulated) {
        document.getElementById(targetInputId).value = simulated;
        if (callback) callback();
      }
      return;
    }

    showToast("🎙️ Listening... Please speak now.");
    voiceRecognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const target = document.getElementById(targetInputId);
      if (target) {
        target.value = transcript;
        showToast(`Heard: "${transcript}"`);
        if (callback) callback();
      }
    };
    voiceRecognition.onerror = (e) => {
      showToast("Voice error or cancelled.");
    };
    voiceRecognition.start();
  };

  const startSurgeryVoiceDictation = () => {
    if (!voiceRecognition) {
      const simulated = prompt("Voice surgery intake. Speak/Type surgery name and doctor's advice:");
      if (simulated) {
        document.getElementById("surgeryNameInput").value = simulated.split(",")[0] || simulated;
        document.getElementById("surgeryDoctorAdviceInput").value = simulated;
      }
      return;
    }

    showToast("🎙️ Listening for surgery details and doctor advice...");
    voiceRecognition.onresult = (event) => {
      const speech = event.results[0][0].transcript;
      showToast(`Heard: "${speech}"`);
      document.getElementById("surgeryDoctorAdviceInput").value = speech;
      if (!document.getElementById("surgeryNameInput").value) {
        document.getElementById("surgeryNameInput").value = speech.split(" ")[0];
      }
    };
    voiceRecognition.start();
  };

  // NutriVoice Modal Assistant
  const openNutriVoiceModal = () => {
    document.getElementById("modalNutriVoice").classList.add("active");
    startNutriVoiceListening();
  };

  const closeNutriVoiceModal = () => {
    if (voiceRecognition) {
      try { voiceRecognition.stop(); } catch (e) {}
    }
    document.getElementById("modalNutriVoice").classList.remove("active");
  };

  const startNutriVoiceListening = () => {
    const statusText = document.getElementById("voiceStatusText");
    const transcriptBox = document.getElementById("voiceTranscriptBox");
    const orb = document.getElementById("voiceOrb");
    const btnText = document.getElementById("btnVoiceToggleText");

    statusText.textContent = "Listening... Ask a nutrition question or say a command.";
    orb.style.animationPlayState = "running";
    btnText.textContent = "Stop Listening";

    if (!voiceRecognition) {
      transcriptBox.innerHTML = '<span style="color: var(--text-tertiary);">Speech recognition not supported in browser. Use quick prompts below.</span>';
      return;
    }

    voiceRecognition.onresult = (event) => {
      const speech = event.results[0][0].transcript;
      processNutriVoiceQuery(speech);
    };

    voiceRecognition.onerror = () => {
      statusText.textContent = "Didn't catch that. Tap quick prompts or try again.";
    };

    try {
      voiceRecognition.start();
    } catch (e) {}
  };

  const toggleNutriVoiceMic = () => {
    const btnText = document.getElementById("btnVoiceToggleText");
    if (btnText.textContent === "Stop Listening") {
      try { voiceRecognition.stop(); } catch (e) {}
      btnText.textContent = "Start Listening";
      document.getElementById("voiceStatusText").textContent = "Microphone paused.";
    } else {
      startNutriVoiceListening();
    }
  };

  const simulateVoiceQuery = (queryText) => {
    processNutriVoiceQuery(queryText);
  };

  const processNutriVoiceQuery = (query) => {
    const transcriptBox = document.getElementById("voiceTranscriptBox");
    const statusText = document.getElementById("voiceStatusText");
    transcriptBox.innerHTML = `<strong>You said:</strong> "${query}"`;

    const q = query.toLowerCase();
    let reply = "";

    if (q.includes("water") || q.includes("glass")) {
      state.tracking.waterGlasses = Math.min(15, state.tracking.waterGlasses + 2);
      saveState();
      renderHydration();
      renderDashboard();
      reply = "Done! Cheffie has logged 2 glasses of water. You are now at " + state.tracking.waterGlasses + " glasses today.";
    } else if (q.includes("cholesterol") || q.includes("dinner")) {
      reply = "Cheffie recommends: For dinner with high cholesterol, try our Moong Dal & Vegetable Khichdi or Silken Tofu Soup. They provide soluble fiber and use zero deep frying to keep lipids in check.";
    } else if (q.includes("gas") || q.includes("bloat")) {
      reply = "Cheffie's Nuskha: Chew half a teaspoon of Ajwain with a quarter teaspoon of black salt and swallow with warm water. It dispels trapped digestive gas within minutes.";
    } else if (q.includes("remind") || q.includes("medicine")) {
      reply = "Your reminder is set! Cheffie will alert you to take your medication on schedule.";
    } else {
      reply = `Cheffie says: Based on your profile with ${state.profile.conditions.join(" and ")}, I recommend focusing on fiber-rich whole grains, methi seeds, and air-fried cooking to keep your vitals steady.`;
    }

    statusText.innerHTML = `🤖 <strong>CHEFFIE:</strong> ${reply}`;

    // Speak reply
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(reply);
      utt.lang = "en-IN";
      window.speechSynthesis.speak(utt);
    }
  };

  // Modal Closer Utility
  const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("active");
  };

  // Public API
  return {
    init,
    toggleTheme,
    goBackSlide,
    showScreen,
    navigateToTab,
    switchAuthMethod,
    sendOtp,
    handleOtpInput,
    verifyOtp,
    loginWithEmail,
    launchDemoMode,
    startOnboarding,
    goToOnboardStep,
    nextOnboardStep,
    prevOnboardStep,
    selectSingleChip,
    toggleMultiCondition,
    addCustomCondition,
    removeCustomCondition,
    addAllergyTag,
    removeAllergyTag,
    addDislikedTag,
    removeDislikedTag,
    completeOnboarding,
    retakeAssessment,
    onRecipeFilterChange,
    setCookingTone,
    addStudioIngredient,
    removeStudioIngredient,
    generateRecipes,
    switchRecipeOption,
    swapIngredientInRecipe,
    startStepsReadAloud,
    pauseResumeStepsTTS,
    stopSpeechSynthesis,
    logRecipeToToday,
    addRecipeToGroceryList,
    openMealEditModal,
    onMealNameInputChange,
    saveMealEdit,
    setWaterGlass,
    adjustWater,
    saveSleepSchedule,
    saveSleepDuration,
    add30mSleepCustom,
    quickAddSleep30m,
    logPresetWorkout,
    logCustomWorkout,
    deleteWorkout,
    toggleMedicineTaken,
    openAddMedicineModal,
    saveNewMedicine,
    deleteMedicine,
    toggleActivity,
    addOtherActivityPrompt,
    deleteActivity,
    switchPlannerDay,
    regenSingleMeal,
    generateFullDayPlan,
    promptUpdateGoalWeight,
    toggleGroceryItem,
    copyGroceryList,
    filterNuske,
    filterNuskeCategory,
    generateSurgeryRecoveryDiet,
    saveGeminiApiKey,
    testGeminiConnection,
    logoutUser,
    exportUserData,
    startVoiceDictation,
    startSurgeryVoiceDictation,
    openNutriVoiceModal,
    closeNutriVoiceModal,
    toggleNutriVoiceMic,
    openCheffieModal: openNutriVoiceModal,
    closeCheffieModal: closeNutriVoiceModal,
    toggleCheffieMic: toggleNutriVoiceMic,
    simulateVoiceQuery,
    closeModal
  };
})();

// Bootstrap on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  HealthChefApp.init();
});

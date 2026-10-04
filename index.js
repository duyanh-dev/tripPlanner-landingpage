AOS.init({
  once: true,
  offset: 100,
});

// ==========================================
// HỆ THỐNG ĐA NGÔN NGỮ
// ==========================================
const dict = {
  vi: {
    nav_story: "Câu chuyện",
    nav_features: "Tính năng",
    nav_demo: "Trải nghiệm",
    hero_badge: "Lên kế hoạch thông minh",
    hero_title:
      "Hành trình hoàn hảo,<br><span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>Bắt đầu từ đây.</span>",
    hero_subtitle:
      "Tạm biệt những bảng tính Excel khô khan hay các ứng dụng ghi chú lộn xộn. TripPlanner biến việc lên kế hoạch du lịch thành một trải nghiệm nghệ thuật.",
    hero_cta1: "<i class='fa-solid fa-play text-sm'></i> Thử Demo Ngay",
    hero_cta2: "Tìm hiểu thêm",
    story_title: "Tại sao chúng tôi tạo ra TripPlanner?",
    story_p1:
      "Chúng tôi yêu thích du lịch, nhưng luôn cảm thấy mệt mỏi với giai đoạn lên kế hoạch. Phải nhảy qua nhảy lại giữa Google Docs, Sheets, bản đồ và các ứng dụng ghi chú khiến mọi thứ trở nên rối rắm.",
    story_p2:
      "Đôi khi, việc tính toán chi phí, quy đổi ngoại tệ hay dời lịch trình một hoạt động cũng ngốn của bạn hàng giờ đồng hồ.",
    story_p3:
      "TripPlanner ra đời để gom tất cả lại vào một giao diện tinh gọn, tuyệt đẹp và thông minh. Để bạn tập trung vào niềm vui của chuyến đi, thay vì những con số.",
    feat_main_title: "Thiết kế dành riêng cho bạn",
    feat_main_subtitle:
      "Những công cụ mạnh mẽ được ẩn giấu bên dưới một giao diện kính mờ xuyên thấu tinh giản.",
    feat1_title: "Lịch trình trực quan",
    feat1_desc:
      "Dòng thời gian (timeline) được thiết kế hiện đại, giúp bạn nắm bắt toàn bộ hoạt động trong ngày chỉ qua một ánh nhìn.",
    feat2_title: "Quy đổi ngoại tệ",
    feat2_desc:
      "Hỗ trợ tính toán ngân sách và quy đổi tự động ra các loại tiền tệ của nhiều quốc gia ngay trên thẻ chuyến đi.",
    feat3_title: "Thao tác hàng loạt",
    feat3_desc:
      "Tiết kiệm thời gian với tính năng tạo nhiều hoạt động cùng lúc. Không cần phải bấm lưu từng cái một như trước nữa.",
    demo_title: "Trải nghiệm Mini Demo",
    demo_subtitle: "Thử tạo một vài hoạt động cho chuyến đi giả định dưới đây.",
    demo_btn_add: "Thêm hoạt động",
    demo_modal_title: "Hoạt động mới",
    demo_btn_cancel: "Hủy",
    demo_btn_save: "Lưu",
    demo_form_name: "Tên hoạt động",
    demo_form_time: "Từ giờ",
    demo_form_type: "Phân loại",
    hero_cta3: "Mã nguồn",
  },
  en: {
    nav_story: "Our Story",
    nav_features: "Features",
    nav_demo: "Try Demo",
    hero_badge: "Smart Planning",
    hero_title:
      "Craft Your Perfect Journey,<br><span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>Starts Right Here.</span>",
    hero_subtitle:
      "Leave the spreadsheets and messy notes behind. TripPlanner brings your itinerary to life with a beautiful, intuitive interface.",
    hero_cta1: "<i class='fa-solid fa-play text-sm'></i> Try Demo Now",
    hero_cta2: "Learn More",
    story_title: "Why did we build TripPlanner?",
    story_p1:
      "We love traveling, but we hate the planning phase. Jumping between docs, sheets, maps, and notes is overwhelming.",
    story_p2:
      "Sometimes, calculating budgets, converting currencies, or shifting a schedule takes hours.",
    story_p3:
      "TripPlanner was born to consolidate everything into a clean, gorgeous, and smart interface. Focus on the joy of the trip, not the logistics.",
    feat_main_title: "Designed for Travelers",
    feat_main_subtitle:
      "Powerful tools hidden beneath a clean, glassmorphic design.",
    feat1_title: "Visual Timeline",
    feat1_desc:
      "A modern timeline design lets you grasp all your daily activities at a single glance.",
    feat2_title: "Currency Converter",
    feat2_desc:
      "Easily calculate budgets and auto-convert currencies for various countries right on your trip card.",
    feat3_title: "Bulk Operations",
    feat3_desc:
      "Save time by creating multiple activities at once. No need to save them one by one anymore.",
    demo_title: "Experience Mini Demo",
    demo_subtitle: "Try adding some activities to the mock trip below.",
    demo_btn_add: "Add Activity",
    demo_modal_title: "New Activity",
    demo_btn_cancel: "Cancel",
    demo_btn_save: "Save",
    demo_form_name: "Activity Name",
    demo_form_time: "Start Time",
    demo_form_type: "Category",
    hero_cta3: "Source Code",
  },
};

let currentLang = "vi";

function toggleLanguage() {
  currentLang = currentLang === "vi" ? "en" : "vi";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[currentLang][key]) {
      el.innerHTML = dict[currentLang][key];
    }
  });
}
// ==========================================
// LOGIC MINI DEMO
// ==========================================
const modal = document.getElementById("demo-modal");
const modalContent = document.getElementById("demo-modal-content");
const inputName = document.getElementById("demo-input-name");
const activitiesList = document.getElementById("demo-activities");
const demoScroll = document.getElementById("demo-main-scroll");

function openDemoModal() {
  modal.classList.remove("opacity-0", "pointer-events-none");
  modalContent.classList.remove("translate-y-10");
  modalContent.classList.add("translate-y-0");
  inputName.focus();
}

function closeDemoModal() {
  modal.classList.add("opacity-0", "pointer-events-none");
  modalContent.classList.remove("translate-y-0");
  modalContent.classList.add("translate-y-10");
  inputName.value = "";
}

function saveDemoActivity() {
  const name = inputName.value.trim();
  const time = document.getElementById("demo-input-time").value || "10:00";
  const typeRaw = document.getElementById("demo-input-type").value;

  if (!name) {
    alert(
      currentLang === "vi"
        ? "Vui lòng nhập tên hoạt động!"
        : "Please enter activity name!",
    );
    return;
  }

  const [icon, colorClass, label] = typeRaw.split("|");

  // Animation CSS
  const style = "animation: fadeInUp 0.4s ease-out forwards;";
  if (!document.getElementById("demo-style")) {
    document.head.insertAdjacentHTML(
      "beforeend",
      `<style id="demo-style">@keyframes fadeInUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }</style>`,
    );
  }

  const html = `
                <div class="relative pl-12 pb-6 group" style="${style}">
                    <div class="absolute left-0 top-1 w-10 h-10 ${colorClass} rounded-full flex items-center justify-center font-black z-10 ring-4 ring-slate-50 text-sm shadow-sm transition-transform group-hover:scale-110">
                        <i class="fa-solid ${icon}"></i>
                    </div>
                    <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col hover:border-blue-200 hover:shadow-md transition-all cursor-pointer">
                        <div class="flex justify-between items-start gap-4">
                            <span class="font-bold text-slate-800 text-sm md:text-base">${name}</span>
                            <span class="px-2 py-1 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-black whitespace-nowrap">${label}</span>
                        </div>
                        <span class="text-xs font-bold text-slate-400 mt-2 flex items-center gap-1"><i class="fa-regular fa-clock"></i> ${time}</span>
                    </div>
                </div>
            `;

  activitiesList.insertAdjacentHTML("beforeend", html);

  setTimeout(() => {
    demoScroll.scrollTop = demoScroll.scrollHeight;
  }, 100);

  closeDemoModal();
}

// ==========================================
// DỮ LIỆU & LOGIC CHUYỂN NGÀY MINI DEMO
// ==========================================
let currentDemoDay = 1;
const demoData = {
  1: `
                <div class="relative pl-12 pb-6 group">
                    <div class="absolute left-0 top-1 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-black z-10 ring-4 ring-slate-50 text-sm shadow-sm transition-transform group-hover:scale-110">
                        <i class="fa-solid fa-plane"></i>
                    </div>
                    <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col hover:border-blue-200 hover:shadow-md transition-all cursor-pointer">
                        <div class="flex justify-between items-start gap-4">
                            <span class="font-bold text-slate-800 text-sm md:text-base">Hạ cánh tại Suvarnabhumi</span>
                            <span class="px-2 py-1 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-black whitespace-nowrap">Di chuyển</span>
                        </div>
                        <span class="text-xs font-bold text-slate-400 mt-2 flex items-center gap-1"><i class="fa-regular fa-clock"></i> 08:00 - 09:30</span>
                    </div>
                </div>
            `,
  2: `
                <div class="text-center py-10 opacity-50">
                    <i class="fa-solid fa-mug-hot text-4xl text-slate-300 mb-3"></i>
                    <p class="text-sm font-bold text-slate-500">Ngày 2 chưa có hoạt động nào</p>
                    <p class="text-xs font-medium text-slate-400 mt-1">Bấm "Thêm HĐ" để thử nhé!</p>
                </div>
            `,
  3: `
                <div class="text-center py-10 opacity-50">
                    <i class="fa-solid fa-bed text-4xl text-slate-300 mb-3"></i>
                    <p class="text-sm font-bold text-slate-500">Ngày 3 trống</p>
                </div>
            `,
};

function switchDemoDay(dayIndex) {
  currentDemoDay = dayIndex;

  for (let i = 1; i <= 3; i++) {
    const tab = document.getElementById(`demo-tab-${i}`);
    if (i === dayIndex) {
      // Active state
      tab.className =
        "demo-tab-btn flex-shrink-0 px-4 py-2.5 bg-slate-900 text-white rounded-2xl shadow-lg shadow-slate-900/20 border border-slate-800 flex flex-col items-center justify-center min-w-[80px] transition-transform active:scale-95";
      tab
        .querySelector("span:first-child")
        .classList.replace("text-slate-500", "text-slate-300");
    } else {
      // Inactive state
      tab.className =
        "demo-tab-btn flex-shrink-0 px-4 py-2.5 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-800 rounded-2xl border border-slate-200 flex flex-col items-center justify-center min-w-[80px] transition-colors";
    }
  }

  const container = document.getElementById("demo-activities");
  container.style.opacity = "0";

  setTimeout(() => {
    container.innerHTML = demoData[dayIndex];
    container.style.transition = "opacity 0.3s ease";
    container.style.opacity = "1";
  }, 150);
}

// ==========================================
// LOGIC TOAST NOTIFICATION
// ==========================================
let toastTimeout;
function showDemoToast(message) {
  const toast = document.getElementById("demo-toast");
  const toastText = document.getElementById("demo-toast-text");

  toastText.innerText = message;

  toast.classList.remove("-translate-y-20", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("-translate-y-20", "opacity-0");
  }, 3000);
}

// ==========================================
// LOGIC TOÀN CẢNH & TẠO HÀNG LOẠT (MINI DEMO)
// ==========================================

// Modal Toàn Cảnh Lịch Trình
const overviewModal = document.getElementById("demo-overview-modal");
const overviewContent = document.getElementById("demo-overview-content");

function openDemoOverview() {
  let html = "";
  for (let i = 1; i <= 3; i++) {
    const isToday = i === 1;
    const dateStr = i === 1 ? "28/09" : i === 2 ? "29/09" : "30/09";
    const dotColor = isToday ? "bg-blue-500" : "bg-slate-300";

    let dayContent = "";
    if (demoData[i] && !demoData[i].includes("trống")) {
      dayContent = `<div class="mt-4 pointer-events-none">${demoData[i]}</div>`;
    } else {
      dayContent = `<div class="text-center py-4 bg-white/50 border border-dashed border-slate-200 rounded-xl mt-4"><span class="text-xs font-bold text-slate-400">Ngày trống - Chưa có hoạt động</span></div>`;
    }

    html += `
                    <div class="relative pl-12 md:pl-16">
                        <div class="absolute left-[13px] md:left-[20px] top-2 w-4 h-4 ${dotColor} rounded-full ring-4 ring-slate-50 z-10"></div>
                        <h3 class="font-black ${isToday ? "text-slate-800" : "text-slate-500"} bg-white inline-block px-4 py-1.5 rounded-xl border border-slate-200 shadow-sm text-sm">Ngày ${i} - ${dateStr}</h3>
                        ${dayContent}
                    </div>
                `;
  }
  document.getElementById("demo-overview-timeline").innerHTML = html;

  // 2. Mở Modal
  overviewModal.classList.remove("opacity-0", "pointer-events-none");
  overviewContent.classList.remove("translate-y-10");
  overviewContent.classList.add("translate-y-0");
}

function closeDemoOverview() {
  overviewModal.classList.add("opacity-0", "pointer-events-none");
  overviewContent.classList.remove("translate-y-0");
  overviewContent.classList.add("translate-y-10");
}

function closeDemoOverview() {
  overviewModal.classList.add("opacity-0", "pointer-events-none");
  overviewContent.classList.remove("translate-y-0");
  overviewContent.classList.add("translate-y-10");
}

// Tạo Hàng Loạt
const bulkModal = document.getElementById("demo-bulk-modal");
const bulkContent = document.getElementById("demo-bulk-content");
const bulkContainer = document.getElementById("demo-bulk-container");
let bulkCount = 0;

function getBulkItemHTML() {
  return `
                <div class="bg-white p-4 md:p-5 rounded-2xl border border-slate-200 shadow-sm demo-bulk-item animate-[fade-in-up_0.3s_ease-out]">
                    <input type="text" placeholder="Ví dụ: Ăn trưa hải sản..." class="bulk-name-val w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:bg-white focus:border-blue-400 mb-3">
                    <div class="flex gap-3">
                        <input type="time" value="12:00" class="bulk-time-val flex-1 p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm text-center outline-none">
                        <select class="bulk-type-val flex-[1.5] p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none">
                            <option value="fa-utensils|bg-orange-100 text-orange-500|Ăn uống">🍽 Ăn uống</option>
                            <option value="fa-camera|bg-blue-100 text-blue-500|Tham quan">📸 Tham quan</option>
                            <option value="fa-car|bg-emerald-100 text-emerald-500|Di chuyển">🚗 Di chuyển</option>
                        </select>
                    </div>
                </div>
            `;
}

function openDemoBulk() {
  bulkModal.classList.remove("opacity-0", "pointer-events-none");
  bulkContent.classList.remove("translate-y-10");
  bulkContent.classList.add("translate-y-0");

  // Reset lại từ đầu
  bulkContainer.innerHTML = "";
  bulkCount = 0;
  addDemoBulkItem();
}

function closeDemoBulk() {
  bulkModal.classList.add("opacity-0", "pointer-events-none");
  bulkContent.classList.remove("translate-y-0");
  bulkContent.classList.add("translate-y-10");
}

function addDemoBulkItem() {
  if (bulkCount >= 3) {
    openJokeModal();
    return;
  }

  bulkContainer.insertAdjacentHTML("beforeend", getBulkItemHTML());
  bulkCount++;

  const scrollArea = document.getElementById("demo-bulk-scroll");
  setTimeout(() => {
    scrollArea.scrollTop = scrollArea.scrollHeight;
  }, 100);
}

function saveDemoBulk() {
  const items = document.querySelectorAll(".demo-bulk-item");
  let hasData = false;

  if (demoData[currentDemoDay].includes("trống")) {
    demoData[currentDemoDay] = "";
  }

  items.forEach((item) => {
    const name = item.querySelector(".bulk-name-val").value.trim();
    if (!name) return;

    hasData = true;
    const time = item.querySelector(".bulk-time-val").value || "12:00";
    const typeRaw = item.querySelector(".bulk-type-val").value;
    const [icon, colorClass, label] = typeRaw.split("|");

    const newCard = `
                    <div class="relative pl-12 pb-6 group animate-[fade-in-up_0.4s_ease-out]">
                        <div class="absolute left-0 top-1 w-10 h-10 ${colorClass} rounded-full flex items-center justify-center font-black z-10 ring-4 ring-slate-50 text-sm shadow-sm transition-transform group-hover:scale-110">
                            <i class="fa-solid ${icon}"></i>
                        </div>
                        <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col hover:border-blue-200 hover:shadow-md transition-all cursor-pointer">
                            <div class="flex justify-between items-start gap-4">
                                <span class="font-bold text-slate-800 text-sm md:text-base">${name}</span>
                                <span class="px-2 py-1 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-black whitespace-nowrap">${label}</span>
                            </div>
                            <span class="text-xs font-bold text-slate-400 mt-2 flex items-center gap-1"><i class="fa-regular fa-clock"></i> ${time}</span>
                        </div>
                    </div>
                `;
    demoData[currentDemoDay] += newCard;
  });

  if (hasData) {
    switchDemoDay(currentDemoDay);
  }
  closeDemoBulk();
}

// ==========================================
// JOKE MODAL (EASTER EGG ĐÌNH CÔNG)
// ==========================================
const jokeModal = document.getElementById("demo-joke-modal");
const jokeContent = document.getElementById("demo-joke-content");

function openJokeModal() {
  jokeModal.classList.remove("opacity-0", "pointer-events-none");
  jokeContent.classList.remove("scale-90");
  jokeContent.classList.add("scale-100");
}

function closeJokeModal() {
  jokeModal.classList.add("opacity-0", "pointer-events-none");
  jokeContent.classList.remove("scale-100");
  jokeContent.classList.add("scale-90");
}

// ==========================================
// DRAG TO SCROLL (Cho Days Tab trên PC)
// ==========================================
const daysSlider = document.getElementById("demo-days-container");
let isDownDays = false;
let startXDays;
let scrollLeftDays;

if (daysSlider) {
  daysSlider.addEventListener("mousedown", (e) => {
    isDownDays = true;
    startXDays = e.pageX - daysSlider.offsetLeft;
    scrollLeftDays = daysSlider.scrollLeft;
  });
  daysSlider.addEventListener("mouseleave", () => {
    isDownDays = false;
  });
  daysSlider.addEventListener("mouseup", () => {
    isDownDays = false;
  });
  daysSlider.addEventListener("mousemove", (e) => {
    if (!isDownDays) return;
    e.preventDefault();
    const x = e.pageX - daysSlider.offsetLeft;
    const walk = (x - startXDays) * 1.5;
    daysSlider.scrollLeft = scrollLeftDays - walk;
  });
}

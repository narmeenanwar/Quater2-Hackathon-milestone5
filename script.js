var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
// Get the elements
var skillsSection = document.getElementById('skills');
var toggleSkillsButton = document.getElementById('toogle-skills');
var skillsLabel = document.getElementById('skills-label');
// Add event listener to the button
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        // skillsLabel.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide';
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkillsButton.textContent = 'Show';
    }
});
(_a = document.getElementById("Resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
});
// Get reference to the form and display area
var form = document.getElementById('Resume');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
if (form && resumeDisplayElement) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var Name = document.getElementById('name').value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var education = document.getElementById("education").value;
        var skills = document.getElementById("skills").value;
        var Experience = document.getElementById("experience").value;
        var linkedin = document.getElementById("linkedin").value;
        var github = document.getElementById("github").value;
        var pictureInput = document.getElementById("picture");
        var usernameInput = document.getElementById("username");
        var username = usernameInput.value;
        var uniquePath = "Resume/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        // Validate form data
        if (!Name || !email || !phone || !address || !education || !skills || !Experience || !linkedin || !github || !usernameInput) {
            alert("Please fill in all the required fields");
            return;
        }
        // Handle profile picture upload
        var profilePictureURL = "";
        if (pictureInput.files && pictureInput.files[0]) {
            var fileReader_1 = new FileReader();
            fileReader_1.onload = function () {
                profilePictureURL = fileReader_1.result;
                generateResumeHTML();
            };
            fileReader_1.readAsDataURL(pictureInput.files[0]);
        }
        else {
            generateResumeHTML();
        }
        function generateResumeHTML() {
            var _this = this;
            var resumeHTML = "\n        <div class=\"header2\" >\n          <h2><b><span id=\"edit-name\" class=\"editable\"> ".concat(Name, " </b> </span></h2>\n          ").concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile picture\">") : '', "\n        </div>\n\n        <div id = \"main\">\n          <h3> Personal Information </h3>\n          <p> <b> Email: </b> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span></p>\n          <p> <b> Phone: </b> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span></p>\n          <p> <b> Address: </b> <span id=\"edit-address\" class=\"editable\"> ").concat(address, " </span></p>\n        </div>\n\n        <div id = \"main\">\n          <h3> Education</h3>\n          <p id=\"edit-education\" class=\"editable\"><b>education: </b> ").concat(education, "</p>\n        </div>\n\n        <div id = \"main\">\n          <h3> Skills</h3>\n          <p id=\"edit-skills\" class=\"editable\"><b>Skills: </b> ").concat(skills, "</p>\n        </div>\n\n        <div id = \"main\">\n          <h3> Work Experience</h3>\n          <p id=\"edit-experience\" class=\"editable\"><b> Experince: </b> ").concat(Experience, "</p>\n        </div>\n\n        <div id=\"header2\" >\n          <h3>Links</h3>\n          <p><b>LinkedIn: </b> <span id=\"edit-linkedin\" class=\"editable\"> ").concat(linkedin, "</span></p>\n          <p><b>GitHub: </b> <span id=\"edit-github\" class=\"editable\"> ").concat(github, "</span></p>\n        </div>\n      ");
            //
            var downloadLink = document.createElement('a');
            var blob = new Blob([resumeHTML], { type: 'text/html;charset=utf-8' });
            var url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.download = uniquePath;
            downloadLink.textContent = "Download your 2024 resume ";
            resumeDisplayElement.innerHTML = resumeHTML;
            resumeDisplayElement === null || resumeDisplayElement === void 0 ? void 0 : resumeDisplayElement.appendChild(downloadLink);
            resumeDisplayElement === null || resumeDisplayElement === void 0 ? void 0 : resumeDisplayElement.classList.remove("hidden");
            /// creat container for button
            var buttonContainer = document.createElement("div");
            buttonContainer.classList.add("button-container");
            resumeDisplayElement === null || resumeDisplayElement === void 0 ? void 0 : resumeDisplayElement.appendChild(buttonContainer);
            var daownloadButton = document.createElement("button");
            daownloadButton.textContent = "Save as PDF";
            daownloadButton.addEventListener('click', function () {
                window.print();
            });
            buttonContainer.appendChild(daownloadButton);
            ///share button
            var shareLinkButton = document.createElement("Button");
            shareLinkButton.textContent = "Copy Shareable Link";
            shareLinkButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                var shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareableLink = "https://yourdomain.com/Resume/".concat(Name.replace(/\s+/g, '_'), "_cv.html");
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            _a.sent();
                            alert("Shareable link copy to clipboard!");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("Failed to copy shareable link: ", err_1);
                            alert("Failed to copy shareable link. Please try again.");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonContainer.appendChild(shareLinkButton);
        }
    });
}
makeEditable();
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentvalue = currentElement.textContent || "";
            /// replace content;
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input = document.createElement("input");
                input.type = "text";
                input.value = currentvalue;
                input.classList.add("editing input");
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}

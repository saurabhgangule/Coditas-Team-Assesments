var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const questionPost = (question) => __awaiter(this, void 0, void 0, function* () {
    const postResponse = yield fetch(`${baseUrl}question`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify(question),
    });
    return yield postResponse.json();
});
const allQuestionGet = () => __awaiter(this, void 0, void 0, function* () {
    const getResponse = yield fetch(`${baseUrl}question`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    });
    return yield getResponse.json();
});
const questionDelete = (position) => __awaiter(this, void 0, void 0, function* () {
    const deleteResponse = yield fetch(`${baseUrl}question/${position}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    });
    return yield deleteResponse.json();
});
const shiftFunction = (action, _id) => __awaiter(this, void 0, void 0, function* () {
    const shiftResponse = yield fetch(`${baseUrl}question/shift/${_id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify({ shiftAction: action })
    });
    return yield shiftResponse.json();
});

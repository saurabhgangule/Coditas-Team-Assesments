const questionPost = async (question: questionInterface) => {
    const postResponse = await fetch(`${baseUrl}question`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify(question),
    });
    return await postResponse.json();
};

const allQuestionGet = async () => {
    const getResponse = await fetch(`${baseUrl}question`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    });
    return await getResponse.json();
};

const questionDelete = async (position: number) => {
    const deleteResponse = await fetch(`${baseUrl}question/${position}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    });
    return await deleteResponse.json();
};

const shiftFunction = async (action: string, _id: string) => {
    const shiftResponse = await fetch(`${baseUrl}question/shift/${_id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify({ shiftAction: action })
    });
    return await shiftResponse.json();
};

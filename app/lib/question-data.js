const questionData = [
    { id: "1", pid: "-1", oid: "", parent: "", text: "您需要咨询还是投诉？" },
    { id: "2", pid: "", oid: "1", parent: "", text: "咨询" },
    { id: "3", pid: "", oid: "1", parent: "", text: "投诉" },
    { id: "4", pid: "1", oid: "", parent: "3", text: "请选择您的就医类型？" },
    { id: "5", pid: "", oid: "4", parent: "", text: "门诊" },
    { id: "6", pid: "", oid: "4", parent: "", text: "住院" },
    { id: "7", pid: "1", oid: "", parent: "2", text: "您是已就医还是未就医？" },
    { id: "8", pid: "", oid: "7", parent: "", text: "已就医咨询" },
    { id: "9", pid: "", oid: "7", parent: "", text: "未就医咨询" },
];

export default questionData;
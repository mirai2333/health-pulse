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

    { id: "10", pid: "7", oid: "", parent: "9", text: "请选择什么问题？" },
    { id: "11", pid: "", oid: "10", parent: "", text: "挂号问题" },
    { id: "12", pid: "", oid: "10", parent: "", text: "医保目录问题" },
    { id: "13", pid: "", oid: "10", parent: "", text: "医保报销问题" },

    { id: "14", pid: "10", oid: "", parent: "11", text: "对挂号有什么疑问？" },
    { id: "15", pid: "", oid: "14", parent: "", text: "如何挂号" },
    { id: "16", pid: "", oid: "14", parent: "", text: "如何选择就诊科室" },

    { id: "17", pid: "7", oid: "", parent: "8", text: "您的参保类型是什么？" },
    { id: "18", pid: "", oid: "17", parent: "", text: "广州医保" },
    { id: "19", pid: "", oid: "17", parent: "", text: "市直医保" },
    { id: "20", pid: "", oid: "17", parent: "", text: "省直医保" },
    { id: "21", pid: "", oid: "17", parent: "", text: "其他类别" },
    { id: "22", pid: "", oid: "17", parent: "", text: "异地就医" }
];

export default questionData;
export function listToTree(items) {
    let tree;;
    const itemMap = {};

    // 首先，创建一个映射表，方便查找每个元素
    items.forEach((item) => {
        itemMap[item['id']] = { ...item, children: [], options: [] };
    });

    // 然后，遍历列表，根据父ID构建树结构
    items.forEach((item) => {
        const parentId = item['pid'];
        const optionId = item['oid'];
        let handlerId;
        let property;
        if (parentId && !optionId) {
            handlerId = parentId;
            property = "children";
        }
        else if (!parentId && optionId) {
            handlerId = optionId;
            property = "options";
        }
        // optionId不可能为-1
        if (handlerId === "-1") {
            tree = itemMap[item['id']];
        } else {
            itemMap[handlerId][property].push(itemMap[item['id']]);
        }

    });

    // 返回树的根节点数组
    return tree;
}

export function findNodeById(tree, targetId) {
    // 检查当前节点是否就是要找的节点
    if (tree.id === targetId) {
        return tree;
    }

    // 如果当前节点有children，递归遍历每一个子节点
    if (tree.children && tree.children.length > 0) {
        for (let child of tree.children) {
            const foundNode = findNodeById(child, targetId);
            // 如果在子节点中找到了目标节点，直接返回
            if (foundNode) {
                return foundNode;
            }
        }
    }

    // 如果当前节点及其子节点都没有找到目标ID，则返回null
    return null;
}
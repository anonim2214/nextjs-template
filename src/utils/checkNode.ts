const checkNode = (node, needNode) => {
    let currentNode = node;
    while (currentNode !== null) {
        if (currentNode === needNode) {
            return true;
        } else {
            currentNode = currentNode.parentElement;
        }
    }
    return false;
};

export default checkNode;
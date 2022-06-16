let objects = [{ id: 2, name: "Организация", parent_id: null },
{ id: 3, name: "Бухгалтерия", parent_id: 2 },
{ id: 6, name: " Отдел охраны", parent_id: 2 },
{ id: 7, name: "Караульная служба", parent_id: 6 },
{ id: 8, name: "Бюро пропусков", parent_id: 6 },
{ id: 12, name: "Патентный отдел", parent_id: 2 },
{ id: 13, name: "Лётная служба", parent_id: 2 },
{ id: 14, name: "Лётный отряд Боинг 737", parent_id: 13 },
{ id: 17, name: "Лётный отряд Боинг 747", parent_id: 13 },
{ id: 18, name: "1-ая авиационная эксадрилия Боинг 737", parent_id: 14 },
{ id: 19, name: "2-ая авиационная эскадрилия Боинг 737", parent_id: 14 },
{ id: 21, name: "Лётно-методический отдел", parent_id: 13 }]


function Node(data, parent = null) {
    this.data = data;
    this.parent = parent;
    this.children = [];

    if (parent != null)
    parent.children.push(this);
}

function Tree(node) {
    this._root = node;
}

function FindRootNodeIndex(objects) {
    for (let i in objects)
        if (objects[i].parent_id == null)
            return i;
}

function FindChildObjects(objects, processed, nodeID)
{
    let result = [];

    if (nodeID < 1)
        return result;

    for (let i in objects)
    {
        if (nodeID == objects[i].parent_id)
        {
            result.push(i);
            processed[i] = true;
        }
    }

    return result;
}

function TraverseNode (node, currDepth, outLines)
{
    currDepth++;
    var outLinesEntry = {depth: currDepth, name: node.data.name};
    outLines.push(outLinesEntry);
    //console.log(outLinesEntry);

    for (let child of node.children)
    {
        TraverseNode(child, currDepth, outLines);
    }
}


let rootIndex = FindRootNodeIndex(objects);

if (rootIndex == null) 
{
    console.log("Ошибка! Корневой элемент не найден.");
    exit;
}

var rootNode = new Node(objects[rootIndex]);
var t = new Tree(rootNode);

let processed = [];
for (let i in objects)
processed[i] = false;

processed[rootIndex] = true;

let nodesToProcess = [rootNode];

while (nodesToProcess.length > 0)
{
   // console.log("Зашли в while");
    let node = nodesToProcess[nodesToProcess.length-1];
    //console.log("Получили из массива элемент с ИД: " + node.data.id);
    nodesToProcess.pop();

    let childIndexes = FindChildObjects(objects, processed, node.data.id);
    //console.log("Для узла найдены индексы дочерних объектов: " + childIndexes);

    for (let i in childIndexes)
    {
        let childData = objects[childIndexes[i]];
        var newNode = new Node(childData, node);

        nodesToProcess.push(newNode);
        //console.log("В массив добавлен узел с ИД: " + newNode.data.id)
    }

}

//console.log("Вышли из while");

var outLines = [];
TraverseNode(rootNode, 0, outLines);

//console.log("Строк в массиве: " + outLines.length);
//console.log(outLines);
let divId = 0;
let htmlTree = document.getElementById("tree");

for (let outLine of outLines)
{
    let outStr = "";
    divId++;

    for (let j = 0; j < outLine.depth; j++)
        outStr += "&nbsp;&nbsp;";

    outStr += outLine.name;
    //console.log(outStr)

    var elem = document.createElement("div");
    elem.innerHTML = outStr;
    elem.setAttribute("id", "node" + divId)
    htmlTree.appendChild(elem)

    //document.write(outStr, "<br>");
}

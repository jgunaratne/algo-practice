var h = { name: 'h' };
var g = { name: 'g' };
var f = { name: 'f' };
var e = { name: 'e', children: [h] };
var d = { name: 'd' };
var c = { name: 'c', children: [f, g] };
var b = { name: 'b', children: [d, e] };
var a = { name: 'a', children: [b, c] };

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var bfs = async function (node, goal) {
  var q = [];
  node.visited = true;
  console.log(node.name);

  q.push(node);
  while (q.length > 0) {
    node = q.shift();
    
    if (node == goal) {
      return node;
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        var childNode = node.children[i];
        childNode.visited = true;
        console.log(childNode.name);

        q.push(childNode);
      }
    }
  }
}

var dfs = async function (node, goal) {
  node.visited = true;
  console.log(node.name);
    if (node == goal) {
      return node;
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        var childNode = node.children[i];
        dfs(childNode, goal);
      }
    }
}

var dfs2 = async function (node, goal) {
  let stack = [node];
  while (stack.length) {      
    let curr = stack.pop();
    console.log(curr.name);
    if (curr.children) {
      for (var i = 0; i < curr.children.length; i++) {
        var childNode = curr.children[i];
        stack.push(childNode)
        childNode.visited = true;
      }
    }
  }
}

console.log('bfs');
var goal = bfs(a, h);
console.log('dfs');
var goal = dfs(a, h);
console.log('dfs2');
var goal = dfs2(a, h);

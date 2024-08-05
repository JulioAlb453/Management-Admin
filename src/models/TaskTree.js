import TreeNode from './TreeNode.js';

export default class TaskTree {
  constructor() {
    this.root = null;
  }

  insert(taskName, finishTime) {
    const normalizedTaskName = taskName.toLowerCase(); // Normalizar a minúsculas
    const newNode = new TreeNode(normalizedTaskName, finishTime);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.key > node.key) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(taskName, callback) {
    const normalizedTaskName = taskName.toLowerCase(); // Normalizar a minúsculas
    this.searchNode(this.root, normalizedTaskName, callback);
  }

  searchNode(node, key, callback) {
    if (node === null) {
      callback(null);
    } else if (key < node.key) {
      this.searchNode(node.left, key, callback);
    } else if (key > node.key) {
      this.searchNode(node.right, key, callback);
    } else {
      callback(node.product);
    }
  }

  getMin(callback) {
    this.getMinNode(this.root, callback);
  }

  getMinNode(node, callback) {
    if (node.left === null) {
      callback(node);
    } else {
      this.getMinNode(node.left, callback);
    }
  }

  getMax(callback) {
    this.getMaxNode(this.root, callback);
  }

  getMaxNode(node, callback) {
    if (node.right === null) {
      callback(node);
    } else {
      this.getMaxNode(node.right, callback);
    }
  }

  traverse(callback) {
    const tasks = [];
    this.traverseInOrder(this.root, tasks);
    callback(tasks);
  }

  traverseInOrder(node, tasks) {
    if (node !== null) {
      this.traverseInOrder(node.left, tasks);
      tasks.push(node);
      this.traverseInOrder(node.right, tasks);
    }
  }
}

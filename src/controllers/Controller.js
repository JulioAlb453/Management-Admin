import TaskTree from '../models/TaskTree.js';
import View from '../view/View.js';

document.addEventListener('DOMContentLoaded', () => {
  const model = new TaskTree();
  const view = new View();

  function handleAddTask(name, finishTime) {
    model.insert(name, finishTime);
    Swal.fire({
      icon: 'success',
      title: 'Registro existoso',
      confirmButtonText: 'OK',
    });
  }

  function handleSearchTask(name, callback) {
    model.search(name.toLowerCase(), callback); // Normalizar a minúsculas
  }

  function handleTraverseTasks(callback) {
    model.traverse(tasks => {
      callback(tasks);
    });
  }

  function handleGetMin(callback) {
    model.getMin(task => callback(task));
  }

  function handleGetMax(callback) {
    model.getMax(task => callback(task));
  }

  view.bindAddTask(handleAddTask);
  view.bindSearchTask(handleSearchTask);
  view.bindTraverseTasks(handleTraverseTasks);
  view.bindGetMin(handleGetMin);
  view.bindGetMax(handleGetMax);
});

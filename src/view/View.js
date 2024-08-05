export default class View {
    constructor() {
      this.addTaskForm = document.getElementById('add-task-form');
      this.searchTaskForm = document.getElementById('search-task-form');
      this.traverseButton = document.getElementById('traverse-btn');
      this.minButton = document.getElementById('min-btn');
      this.maxButton = document.getElementById('max-btn');
      this.searchResult = document.getElementById('search-result');
      this.traverseResult = document.getElementById('traverse-result');
      this.minResult = document.getElementById('min-result');
      this.maxResult = document.getElementById('max-result');
    }
  
    bindAddTask(handler) {
      this.addTaskForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const finishTime = parseFloat(document.getElementById('finish-time').value);
        handler(name, finishTime);
      });
    }
  
    bindSearchTask(handler) {
      this.searchTaskForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('search-name').value;

        handler(name, value => {
            console.log(name, value)
          this.searchResult.textContent = value !== null ? `Horas trabajadas: ${value} horas` : 'Task not found';
        });
        
      });
    }
  
    bindTraverseTasks(handler) {
      this.traverseButton.addEventListener('click', () => {
        handler(tasks => {
            console.log(tasks)
          this.traverseResult.innerHTML = tasks.map(task => `<li>nombre del trabajador: ${task.key} , horas trabajadas: ${task.product} horas </li>`).join('');
        });
      });
    }
  
    bindGetMin(handler) {
      this.minButton.addEventListener('click', () => {
        handler(task => {
          this.minResult.textContent = task ? `Menor tiempo trabajado: ${task.product} horas , trabajador: ${task.key} , Rendimiento optimo ` : 'No tasks found';
        });
      });
    }
  
    bindGetMax(handler) {
      this.maxButton.addEventListener('click', () => {
        handler(task => {
          this.maxResult.textContent = task ? `Mayor tiempo trabajado: ${task.product} horas ,  trabajador: ${task.key},   Rendimiento bajo` : 'No tasks found';
        });
      });
    }
  }
  
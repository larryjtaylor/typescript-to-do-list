class Task {
  done: boolean = false;


  constructor( public description: string, public priority: string){
  }
}

var tasks: Task[] = [];
tasks.push(new Task('take out the trash', 'medium'));
console.log(tasks);

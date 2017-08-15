class Task {
  done: boolean = false;


  constructor( public description: string, public priority: string){ }

  markDone() {
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('take out the trash', 'medium'));
tasks.push(new Task('do dishes', 'high'));
tasks.push(new Task('wash car', 'low'));


tasks[1].markDone();

for (var task of tasks){
console.log(task);
}

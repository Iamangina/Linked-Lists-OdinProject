function LinkedList(){
let head = null;

    function append(value){
        let newNode = createNode(value);
        if (head === null){
            head = newNode;
        } else {
            let current = head;
            while (current.next){
                current = current.next;
            }
            current.next = newNode;
            return head;
        }
    };

    function prepend(value){
        let newNode = createNode(value);
        if (head === null){
            head = newNode;
        } else {
            newNode.next = head;
            head = newNode;
        }
    };

    function size(){
        let count = 0;
        let current = head;
        while (current){
            count++;
            current = current.next;
            
        }
        return count;
    };

    function getHead(){
        return head;
    };

    function tail(){
        if(head === null){
            return null;
        } 
        let current = head;
        while(current.next !==null){
            current = current.next;
        } return current;
    };

    function at(index){
        if(head===null){
            return null
        } 
        let current = head;
        let count = 0;
        while (current !== null){
           if (count === index){
            return current
           }else { 
            count ++;
            current = current.next;
           }
           
        } return null;
    };

    function pop(){
        if(head===null){
            return null;
        } 
        if(head.next === null){
            head = null;
            return;
        }
        else {
            let current = head;
            while(current.next.next !== null){
                current = current.next;
            } 
            current.next = null;
        }
    }

    function contains(value){
        if(head === null){
            return false
        } 
        let current = head;
        while(current !== null){
            if(current.value === value){
                return true;
            } current = current.next;
        }
        return false;
    }

    function find(value){
        if(head === null){
            return null;
        } 
        let current = head;
        let index = 0; 
        while (current !== null){
            if(current.value === value){
                return index;
            } current = current.next;
            index++;
        }
        return null;
    }

    function toString(){
        if(head === null){
            return "null";
        } 
        let result = "";
        let current = head;
        while (current !== null){
          result += "(" + current.value + ") -> ";
          current = current.next;
        } result += "null";
        return result;
    }

    return {
  append,
  prepend,
  size,
  getHead,
  tail,
  at,
  pop,
  contains,
  find,
  toString
};
}

function createNode(value){
    return{
        value,
        next: null,
    };
}

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
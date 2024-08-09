# Time and Space Complexity:

## Time Complexity:
  ### Def : 
    - Time Complexity is the measure of the amount of the time an algorithm takes to complete as a function of length of the input.It's typically expressed using Big O Notation, which categorizes algortihms by their worst-case scenario. Common time complexities inculde O(1), O(n), O(n^2).

## Explaining in Simple Terms:
  - Thinking of time complexity as how long it takes to complete a task.Imagine have different tasks to do, each task takes certain time depending on how big it is. 

  ### Examples: 

    1. Constant Time - O(1):
        The time it takes to run the algorithm does not change with size of the input:

        - Accessing an First element in an array by its index.How large the array is, retrieving the first element always takes the same amount of time.

        ```Javascript

        function getFirstElement(arr){
            return arr[0]
        }

        ```
      - No matter how many items you have, it always takes the same amount of time.
      - Looking at the first item in a list.If you have a list of 10 items or 1000 items,you can instantly look at first one.

      2. Linear Time - O(n):
           The time it takes to run algorithm increas

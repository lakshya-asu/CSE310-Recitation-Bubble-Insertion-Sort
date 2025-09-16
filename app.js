// Application data with enhanced pseudocode support
const appData = {
  sampleArray: [7, 3, 8, 1, 5],
  algorithms: {
    insertionSort: {
      name: "Insertion Sort",
      description: "Builds the final sorted array one item at a time by inserting each element into its proper position.",
      timeComplexity: "O(n²) worst case, O(n) best case",
      spaceComplexity: "O(1)",
      pseudocode: [
        "for i = 1 to length(array) - 1:",
        "    key = array[i]", 
        "    j = i - 1",
        "    while j >= 0 and array[j] > key:",
        "        array[j + 1] = array[j]",
        "        j = j - 1",
        "    array[j + 1] = key"
      ]
    },
    bubbleSort: {
      name: "Bubble Sort",
      description: "Repeatedly steps through the list, compares adjacent elements and swaps them if they're in wrong order.",
      timeComplexity: "O(n²) worst case, O(n) best case", 
      spaceComplexity: "O(1)",
      pseudocode: [
        "for i = 0 to length(array) - 2:",
        "    swapped = false",
        "    for j = 0 to length(array) - 2 - i:",
        "        if array[j] > array[j + 1]:",
        "            swap array[j] and array[j + 1]",
        "            swapped = true",
        "    if not swapped:",
        "        break"
      ]
    }
  },
  insertionSortSteps: [
    {
      step: 0,
      description: "Initialize the algorithm. The first element is considered already sorted.",
      array: [7, 3, 8, 1, 5],
      sortedIndex: 0,
      currentIndex: -1,
      compareIndex: -1,
      highlightLine: -1,
      variables: {"i": 1, "key": null, "j": null},
      codeExplanation: "Starting the outer loop with i = 1 (second element)"
    },
    {
      step: 1,
      description: "Set key = array[1] = 3. This is the element we want to insert into the sorted portion.",
      array: [7, 3, 8, 1, 5],
      sortedIndex: 0,
      currentIndex: 1,
      compareIndex: -1,
      highlightLine: 1,
      variables: {"i": 1, "key": 3, "j": null},
      codeExplanation: "Store the current element (3) in the key variable"
    },
    {
      step: 2,
      description: "Set j = i - 1 = 0. Start comparing key with elements in the sorted portion.",
      array: [7, 3, 8, 1, 5],
      sortedIndex: 0,
      currentIndex: 1,
      compareIndex: 0,
      highlightLine: 2,
      variables: {"i": 1, "key": 3, "j": 0},
      codeExplanation: "Initialize j to point to the last element of the sorted portion"
    },
    {
      step: 3,
      description: "Check while condition: j >= 0 (true) and array[0] > key (7 > 3, true). Enter the while loop.",
      array: [7, 3, 8, 1, 5],
      sortedIndex: 0,
      currentIndex: 1,
      compareIndex: 0,
      highlightLine: 3,
      variables: {"i": 1, "key": 3, "j": 0},
      codeExplanation: "Check if we need to shift elements: j >= 0 AND array[j] > key"
    },
    {
      step: 4,
      description: "Shift array[0] = 7 to the right: array[1] = 7.",
      array: [7, 7, 8, 1, 5],
      sortedIndex: 0,
      currentIndex: 1,
      compareIndex: 0,
      highlightLine: 4,
      variables: {"i": 1, "key": 3, "j": 0},
      codeExplanation: "Shift the larger element to the right to make space"
    },
    {
      step: 5,
      description: "Decrement j: j = j - 1 = -1.",
      array: [7, 7, 8, 1, 5],
      sortedIndex: 0,
      currentIndex: 1,
      compareIndex: -1,
      highlightLine: 5,
      variables: {"i": 1, "key": 3, "j": -1},
      codeExplanation: "Move j to the previous position to continue checking"
    },
    {
      step: 6,
      description: "While condition fails (j < 0). Insert key at position j + 1 = 0: array[0] = 3.",
      array: [3, 7, 8, 1, 5],
      sortedIndex: 1,
      currentIndex: -1,
      compareIndex: -1,
      highlightLine: 6,
      variables: {"i": 1, "key": 3, "j": -1},
      codeExplanation: "Insert the key at its correct position in the sorted portion"
    },
    {
      step: 7,
      description: "Move to next iteration: i = 2, key = array[2] = 8.",
      array: [3, 7, 8, 1, 5],
      sortedIndex: 1,
      currentIndex: 2,
      compareIndex: -1,
      highlightLine: 1,
      variables: {"i": 2, "key": 8, "j": null},
      codeExplanation: "Start processing the next element (8)"
    },
    {
      step: 8,
      description: "Set j = 1. Compare key (8) with array[1] (7). Since 8 > 7, no shifting needed.",
      array: [3, 7, 8, 1, 5],
      sortedIndex: 2,
      currentIndex: -1,
      compareIndex: -1,
      highlightLine: 3,
      variables: {"i": 2, "key": 8, "j": 1},
      codeExplanation: "While condition fails (array[j] <= key), so 8 stays in place"
    },
    {
      step: 9,
      description: "Move to next iteration: i = 3, key = array[3] = 1.",
      array: [3, 7, 8, 1, 5],
      sortedIndex: 2,
      currentIndex: 3,
      compareIndex: -1,
      highlightLine: 1,
      variables: {"i": 3, "key": 1, "j": null},
      codeExplanation: "Start processing element 1, which needs to move to the front"
    },
    {
      step: 10,
      description: "Shift elements 8, 7, and 3 to make room for key = 1 at the beginning.",
      array: [1, 3, 7, 8, 5],
      sortedIndex: 3,
      currentIndex: -1,
      compareIndex: -1,
      highlightLine: 6,
      variables: {"i": 3, "key": 1, "j": -1},
      codeExplanation: "After multiple shifts, insert 1 at position 0"
    },
    {
      step: 11,
      description: "Final iteration: i = 4, key = array[4] = 5. Insert 5 in correct position.",
      array: [1, 3, 5, 7, 8],
      sortedIndex: 4,
      currentIndex: -1,
      compareIndex: -1,
      highlightLine: 6,
      variables: {"i": 4, "key": 5, "j": 1},
      codeExplanation: "Insert 5 between 3 and 7, completing the sort"
    }
  ],
  bubbleSortSteps: [
    {
      step: 0,
      description: "Start first pass (i = 0). Initialize swapped = false.",
      array: [7, 3, 8, 1, 5],
      comparing: [-1, -1],
      pass: 1,
      swapped: false,
      highlightLine: 1,
      variables: {"i": 0, "j": null, "swapped": false},
      codeExplanation: "Begin the outer loop for pass 1, reset swapped flag"
    },
    {
      step: 1,
      description: "Start inner loop: j = 0. Compare array[0] and array[1]: 7 > 3.",
      array: [7, 3, 8, 1, 5],
      comparing: [0, 1],
      pass: 1,
      swapped: false,
      highlightLine: 3,
      variables: {"i": 0, "j": 0, "swapped": false},
      codeExplanation: "Check if adjacent elements need to be swapped"
    },
    {
      step: 2,
      description: "Condition true (7 > 3), so swap array[0] and array[1]. Set swapped = true.",
      array: [3, 7, 8, 1, 5],
      comparing: [0, 1],
      pass: 1,
      swapped: true,
      highlightLine: 4,
      variables: {"i": 0, "j": 0, "swapped": true},
      codeExplanation: "Swap the elements and mark that a swap occurred"
    },
    {
      step: 3,
      description: "Increment j = 1. Compare array[1] and array[2]: 7 < 8, no swap needed.",
      array: [3, 7, 8, 1, 5],
      comparing: [1, 2],
      pass: 1,
      swapped: true,
      highlightLine: 3,
      variables: {"i": 0, "j": 1, "swapped": true},
      codeExplanation: "Elements are in correct order, continue without swapping"
    },
    {
      step: 4,
      description: "Increment j = 2. Compare array[2] and array[3]: 8 > 1, swap needed.",
      array: [3, 7, 8, 1, 5],
      comparing: [2, 3],
      pass: 1,
      swapped: true,
      highlightLine: 4,
      variables: {"i": 0, "j": 2, "swapped": true},
      codeExplanation: "Another swap needed, 8 is larger than 1"
    },
    {
      step: 5,
      description: "Swap array[2] and array[3].",
      array: [3, 7, 1, 8, 5],
      comparing: [2, 3],
      pass: 1,
      swapped: true,
      highlightLine: 4,
      variables: {"i": 0, "j": 2, "swapped": true},
      codeExplanation: "Perform the swap operation"
    },
    {
      step: 6,
      description: "Increment j = 3. Compare array[3] and array[4]: 8 > 5, swap needed.",
      array: [3, 7, 1, 8, 5],
      comparing: [3, 4],
      pass: 1,
      swapped: true,
      highlightLine: 4,
      variables: {"i": 0, "j": 3, "swapped": true},
      codeExplanation: "Last comparison of this pass, 8 > 5"
    },
    {
      step: 7,
      description: "Swap array[3] and array[4]. Pass 1 complete, largest element (8) is in place.",
      array: [3, 7, 1, 5, 8],
      comparing: [-1, -1],
      pass: 1,
      swapped: true,
      highlightLine: 4,
      variables: {"i": 0, "j": 3, "swapped": true},
      codeExplanation: "8 has 'bubbled' to its correct position at the end"
    },
    {
      step: 8,
      description: "Start pass 2 (i = 1). swapped = false, j = 0. Compare 3 and 7.",
      array: [3, 7, 1, 5, 8],
      comparing: [0, 1],
      pass: 2,
      swapped: false,
      highlightLine: 3,
      variables: {"i": 1, "j": 0, "swapped": false},
      codeExplanation: "Second pass, ignore the last element (already sorted)"
    },
    {
      step: 9,
      description: "3 < 7, no swap. j = 1, compare 7 and 1: 7 > 1, swap needed.",
      array: [3, 7, 1, 5, 8],
      comparing: [1, 2],
      pass: 2,
      swapped: false,
      highlightLine: 4,
      variables: {"i": 1, "j": 1, "swapped": false},
      codeExplanation: "Found elements that need swapping"
    },
    {
      step: 10,
      description: "Swap 7 and 1.",
      array: [3, 1, 7, 5, 8],
      comparing: [1, 2],
      pass: 2,
      swapped: true,
      highlightLine: 4,
      variables: {"i": 1, "j": 1, "swapped": true},
      codeExplanation: "Perform swap and set swapped flag"
    },
    {
      step: 11,
      description: "j = 2, compare 7 and 5: 7 > 5, swap needed.",
      array: [3, 1, 7, 5, 8],
      comparing: [2, 3],
      pass: 2,
      swapped: true,
      highlightLine: 4,
      variables: {"i": 1, "j": 2, "swapped": true},
      codeExplanation: "Continue comparing adjacent elements"
    },
    {
      step: 12,
      description: "Swap 7 and 5. Pass 2 complete, 7 is now in correct position.",
      array: [3, 1, 5, 7, 8],
      comparing: [-1, -1],
      pass: 2,
      swapped: true,
      highlightLine: 4,
      variables: {"i": 1, "j": 2, "swapped": true},
      codeExplanation: "7 has bubbled to its correct position"
    },
    {
      step: 13,
      description: "Start pass 3 (i = 2). Compare 3 and 1: 3 > 1, swap needed.",
      array: [3, 1, 5, 7, 8],
      comparing: [0, 1],
      pass: 3,
      swapped: false,
      highlightLine: 4,
      variables: {"i": 2, "j": 0, "swapped": false},
      codeExplanation: "Third pass, checking fewer elements"
    },
    {
      step: 14,
      description: "Swap 3 and 1. Compare 3 and 5: 3 < 5, no swap needed.",
      array: [1, 3, 5, 7, 8],
      comparing: [1, 2],
      pass: 3,
      swapped: true,
      highlightLine: 3,
      variables: {"i": 2, "j": 1, "swapped": true},
      codeExplanation: "After swap, remaining elements are in order"
    },
    {
      step: 15,
      description: "Array is now sorted: [1, 3, 5, 7, 8]. Algorithm complete!",
      array: [1, 3, 5, 7, 8],
      comparing: [-1, -1],
      pass: 3,
      swapped: true,
      highlightLine: -1,
      variables: {"i": 2, "j": 1, "swapped": true},
      codeExplanation: "Sorting complete - all elements in correct positions"
    }
  ],
  codeConversion: {
    insertionSort: [
      {
        pseudocode: "for i = 1 to length(array) - 1:",
        cpp: "for (int i = 1; i < n; i++) {",
        explanation: "C++ for loop syntax: declare int i, condition i < n, increment automatic"
      },
      {
        pseudocode: "    key = array[i]",
        cpp: "    int key = array[i];", 
        explanation: "C++ requires explicit type declaration and semicolon"
      },
      {
        pseudocode: "    j = i - 1",
        cpp: "    int j = i - 1;",
        explanation: "Declare variable j with explicit int type and semicolon"
      },
      {
        pseudocode: "    while j >= 0 and array[j] > key:",
        cpp: "    while (j >= 0 && array[j] > key) {",
        explanation: "C++ uses && for logical AND and parentheses around condition"
      },
      {
        pseudocode: "        array[j + 1] = array[j]",
        cpp: "        array[j + 1] = array[j];",
        explanation: "Direct translation with required semicolon"
      },
      {
        pseudocode: "        j = j - 1", 
        cpp: "        j--;",
        explanation: "C++ shorthand: j-- is equivalent to j = j - 1"
      },
      {
        pseudocode: "    array[j + 1] = key",
        cpp: "    }\n    array[j + 1] = key;",
        explanation: "Close while loop with } then assign key with semicolon"
      }
    ],
    bubbleSort: [
      {
        pseudocode: "for i = 0 to length(array) - 2:",
        cpp: "for (int i = 0; i < n - 1; i++) {",
        explanation: "C++ for loop with explicit int declaration and condition"
      },
      {
        pseudocode: "    swapped = false",
        cpp: "    bool swapped = false;",
        explanation: "C++ uses 'bool' type and 'false' keyword with semicolon"
      },
      {
        pseudocode: "    for j = 0 to length(array) - 2 - i:",
        cpp: "    for (int j = 0; j < n - 1 - i; j++) {",
        explanation: "Nested for loop with decreasing range as i increases"
      },
      {
        pseudocode: "        if array[j] > array[j + 1]:",
        cpp: "        if (array[j] > array[j + 1]) {",
        explanation: "C++ if statement with parentheses around condition"
      },
      {
        pseudocode: "            swap array[j] and array[j + 1]",
        cpp: "            int temp = array[j];\n            array[j] = array[j + 1];\n            array[j + 1] = temp;",
        explanation: "C++ swap using temporary variable - three assignment statements"
      },
      {
        pseudocode: "            swapped = true",
        cpp: "            swapped = true;",
        explanation: "Set boolean flag to true with semicolon"
      },
      {
        pseudocode: "    if not swapped:",
        cpp: "    }\n    if (!swapped) break;",
        explanation: "Close inner loop, then check negation with ! operator"
      },
      {
        pseudocode: "        break",
        cpp: "}",
        explanation: "Close the outer loop - break statement included above"
      }
    ]
  }
};

// Application state
let currentSlide = 0;
let currentInsertionStep = 0;
let currentBubbleStep = 0;
let currentInsertionConversion = 0;
let currentBubbleConversion = 0;
const totalSlides = 10;

// DOM elements - will be initialized after DOM loads
let slides, prevSlideBtn, nextSlideBtn, currentSlideNumber, progressFill;
let insertionArray, insertionDescription, insertionStepTitle, insertionStepCounter, prevInsertionBtn, nextInsertionBtn;
let bubbleArray, bubbleDescription, bubbleStepTitle, bubbleStepCounter, prevBubbleBtn, nextBubbleBtn;
let insertionPseudocode, insertionCodeExplanation, insertionVariables;
let bubblePseudocode, bubbleCodeExplanation, bubbleVariables;
let insertionConversionList, insertionConversionCounter, prevInsertionConversionBtn, nextInsertionConversionBtn;
let bubbleConversionList, bubbleConversionCounter, prevBubbleConversionBtn, nextBubbleConversionBtn;

// Initialize DOM elements
function initializeElements() {
  slides = document.querySelectorAll('.slide');
  prevSlideBtn = document.getElementById('prev-slide');
  nextSlideBtn = document.getElementById('next-slide');
  currentSlideNumber = document.getElementById('current-slide-number');
  progressFill = document.getElementById('progress-fill');

  // Insertion sort elements
  insertionArray = document.getElementById('insertion-array');
  insertionDescription = document.getElementById('insertion-description');
  insertionStepTitle = document.getElementById('insertion-step-title');
  insertionStepCounter = document.getElementById('insertion-step-counter');
  prevInsertionBtn = document.getElementById('prev-insertion-step');
  nextInsertionBtn = document.getElementById('next-insertion-step');
  insertionPseudocode = document.getElementById('insertion-pseudocode');
  insertionCodeExplanation = document.getElementById('insertion-code-explanation');
  insertionVariables = document.getElementById('insertion-variables');

  // Bubble sort elements
  bubbleArray = document.getElementById('bubble-array');
  bubbleDescription = document.getElementById('bubble-description');
  bubbleStepTitle = document.getElementById('bubble-step-title');
  bubbleStepCounter = document.getElementById('bubble-step-counter');
  prevBubbleBtn = document.getElementById('prev-bubble-step');
  nextBubbleBtn = document.getElementById('next-bubble-step');
  bubblePseudocode = document.getElementById('bubble-pseudocode');
  bubbleCodeExplanation = document.getElementById('bubble-code-explanation');
  bubbleVariables = document.getElementById('bubble-variables');

  // Code conversion elements
  insertionConversionList = document.getElementById('insertion-conversion-list');
  insertionConversionCounter = document.getElementById('insertion-conversion-counter');
  prevInsertionConversionBtn = document.getElementById('prev-insertion-conversion');
  nextInsertionConversionBtn = document.getElementById('next-insertion-conversion');
  
  bubbleConversionList = document.getElementById('bubble-conversion-list');
  bubbleConversionCounter = document.getElementById('bubble-conversion-counter');
  prevBubbleConversionBtn = document.getElementById('prev-bubble-conversion');
  nextBubbleConversionBtn = document.getElementById('next-bubble-conversion');
}

// Initialize the application
function init() {
  initializeElements();
  
  showSlide(currentSlide);
  updateInsertionStep();
  updateBubbleStep();
  initializeCodeConversions();
  
  // Add event listeners with proper error checking
  if (prevSlideBtn) {
    prevSlideBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateSlide(-1);
    });
  }
  
  if (nextSlideBtn) {
    nextSlideBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateSlide(1);
    });
  }
  
  if (prevInsertionBtn) {
    prevInsertionBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateInsertionStep(-1);
    });
  }
  
  if (nextInsertionBtn) {
    nextInsertionBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateInsertionStep(1);
    });
  }
  
  if (prevBubbleBtn) {
    prevBubbleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateBubbleStep(-1);
    });
  }
  
  if (nextBubbleBtn) {
    nextBubbleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateBubbleStep(1);
    });
  }

  // Code conversion navigation
  if (prevInsertionConversionBtn) {
    prevInsertionConversionBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateInsertionConversion(-1);
    });
  }
  
  if (nextInsertionConversionBtn) {
    nextInsertionConversionBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateInsertionConversion(1);
    });
  }
  
  if (prevBubbleConversionBtn) {
    prevBubbleConversionBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateBubbleConversion(-1);
    });
  }
  
  if (nextBubbleConversionBtn) {
    nextBubbleConversionBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateBubbleConversion(1);
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', handleKeyDown);
}

// Handle keyboard navigation
function handleKeyDown(event) {
  // Use Ctrl+Arrow keys for step navigation within algorithms
  if (event.ctrlKey) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      if (currentSlide === 2) {
        navigateInsertionStep(-1);
      } else if (currentSlide === 4) {
        navigateInsertionConversion(-1);
      } else if (currentSlide === 6) {
        navigateBubbleStep(-1);
      } else if (currentSlide === 8) {
        navigateBubbleConversion(-1);
      }
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      if (currentSlide === 2) {
        navigateInsertionStep(1);
      } else if (currentSlide === 4) {
        navigateInsertionConversion(1);
      } else if (currentSlide === 6) {
        navigateBubbleStep(1);
      } else if (currentSlide === 8) {
        navigateBubbleConversion(1);
      }
    }
  } else {
    // Use plain Arrow keys for slide navigation
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      navigateSlide(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      navigateSlide(1);
    }
  }
}

// Navigate between slides
function navigateSlide(direction) {
  const newSlide = currentSlide + direction;
  
  if (newSlide >= 0 && newSlide < totalSlides) {
    currentSlide = newSlide;
    showSlide(currentSlide);
  }
}

// Show specific slide
function showSlide(slideIndex) {
  console.log('Showing slide', slideIndex);
  
  if (!slides || slides.length === 0) {
    console.error('No slides found');
    return;
  }
  
  slides.forEach((slide, index) => {
    if (slide) {
      const isActive = index === slideIndex;
      slide.classList.toggle('active', isActive);
    }
  });
  
  if (currentSlideNumber) {
    currentSlideNumber.textContent = slideIndex + 1;
  }
  updateProgressBar();
  updateNavigationButtons();
  
  // Initialize specific slide content when entering
  if (slideIndex === 2) {
    updateInsertionStep();
  } else if (slideIndex === 4) {
    updateInsertionConversion();
  } else if (slideIndex === 6) {
    updateBubbleStep();
  } else if (slideIndex === 8) {
    updateBubbleConversion();
  }
}

// Update progress bar
function updateProgressBar() {
  if (!progressFill) return;
  const progress = ((currentSlide + 1) / totalSlides) * 100;
  progressFill.style.width = `${progress}%`;
  console.log('Progress updated to:', progress + '%');
}

// Update navigation buttons
function updateNavigationButtons() {
  if (prevSlideBtn) {
    prevSlideBtn.disabled = currentSlide === 0;
  }
  if (nextSlideBtn) {
    nextSlideBtn.disabled = currentSlide === totalSlides - 1;
  }
}

// Navigate insertion sort steps
function navigateInsertionStep(direction) {
  const newStep = currentInsertionStep + direction;
  if (newStep >= 0 && newStep < appData.insertionSortSteps.length) {
    currentInsertionStep = newStep;
    updateInsertionStep();
  }
}

// Update insertion sort visualization
function updateInsertionStep() {
  if (!insertionStepTitle || !insertionDescription || !insertionStepCounter || !insertionArray) return;
  
  const step = appData.insertionSortSteps[currentInsertionStep];
  
  insertionStepTitle.textContent = `Insertion Sort - Step ${currentInsertionStep + 1}`;
  insertionDescription.textContent = step.description;
  insertionStepCounter.textContent = `Step ${currentInsertionStep + 1} of ${appData.insertionSortSteps.length}`;
  
  renderArray(insertionArray, step.array, (index) => {
    if (index <= step.sortedIndex && step.currentIndex === -1 && step.compareIndex === -1) {
      return 'sorted';
    } else if (index === step.currentIndex) {
      return 'current';
    } else if (index === step.compareIndex) {
      return 'comparing';
    } else {
      return 'unsorted';
    }
  });
  
  updatePseudocodeHighlighting(insertionPseudocode, step.highlightLine);
  
  if (insertionCodeExplanation) {
    insertionCodeExplanation.textContent = step.codeExplanation || '';
  }
  
  updateVariablesDisplay(insertionVariables, step.variables);
  
  if (prevInsertionBtn) {
    prevInsertionBtn.disabled = currentInsertionStep === 0;
  }
  if (nextInsertionBtn) {
    nextInsertionBtn.disabled = currentInsertionStep === appData.insertionSortSteps.length - 1;
  }
}

// Navigate bubble sort steps
function navigateBubbleStep(direction) {
  const newStep = currentBubbleStep + direction;
  if (newStep >= 0 && newStep < appData.bubbleSortSteps.length) {
    currentBubbleStep = newStep;
    updateBubbleStep();
  }
}

// Update bubble sort visualization
function updateBubbleStep() {
  if (!bubbleStepTitle || !bubbleDescription || !bubbleStepCounter || !bubbleArray) return;
  
  const step = appData.bubbleSortSteps[currentBubbleStep];
  
  bubbleStepTitle.textContent = `Bubble Sort - Step ${currentBubbleStep + 1}`;
  bubbleDescription.textContent = step.description;
  bubbleStepCounter.textContent = `Step ${currentBubbleStep + 1} of ${appData.bubbleSortSteps.length}`;
  
  renderArray(bubbleArray, step.array, (index) => {
    if (step.comparing[0] === index || step.comparing[1] === index) {
      return 'comparing';
    } else if (currentBubbleStep === appData.bubbleSortSteps.length - 1) {
      return 'sorted';
    } else {
      const sortedFromEnd = Math.max(0, step.pass - 1);
      if (index >= step.array.length - sortedFromEnd && step.comparing[0] === -1) {
        return 'sorted';
      } else {
        return 'unsorted';
      }
    }
  });
  
  updatePseudocodeHighlighting(bubblePseudocode, step.highlightLine);
  
  if (bubbleCodeExplanation) {
    bubbleCodeExplanation.textContent = step.codeExplanation || '';
  }
  
  updateVariablesDisplay(bubbleVariables, step.variables);
  
  if (prevBubbleBtn) {
    prevBubbleBtn.disabled = currentBubbleStep === 0;
  }
  if (nextBubbleBtn) {
    nextBubbleBtn.disabled = currentBubbleStep === appData.bubbleSortSteps.length - 1;
  }
}

// Initialize code conversions
function initializeCodeConversions() {
  console.log('Initializing code conversions...');
  if (insertionConversionList) {
    renderConversionList(insertionConversionList, appData.codeConversion.insertionSort);
    console.log('Insertion conversion list initialized');
  } else {
    console.log('Insertion conversion list not found');
  }
  if (bubbleConversionList) {
    renderConversionList(bubbleConversionList, appData.codeConversion.bubbleSort);
    console.log('Bubble conversion list initialized');
  } else {
    console.log('Bubble conversion list not found');
  }
  updateInsertionConversion();
  updateBubbleConversion();
}

// Render conversion list
function renderConversionList(container, conversions) {
  if (!container) return;
  
  container.innerHTML = '';
  conversions.forEach((conversion, index) => {
    const item = document.createElement('div');
    item.className = 'conversion-item';
    item.innerHTML = `
      <div class="conversion-from">Pseudocode: ${conversion.pseudocode}</div>
      <div class="conversion-to">C++: ${conversion.cpp.replace(/\\n/g, '<br>')}</div>
      <div class="conversion-explanation">${conversion.explanation}</div>
    `;
    container.appendChild(item);
  });
}

// Navigate insertion sort code conversion
function navigateInsertionConversion(direction) {
  const newStep = currentInsertionConversion + direction;
  if (newStep >= 0 && newStep < appData.codeConversion.insertionSort.length) {
    currentInsertionConversion = newStep;
    updateInsertionConversion();
  }
}

// Update insertion sort code conversion
function updateInsertionConversion() {
  console.log('Updating insertion conversion, step:', currentInsertionConversion);
  
  if (!insertionConversionCounter) {
    console.log('Insertion conversion counter not found');
    return;
  }
  
  if (!insertionConversionList) {
    console.log('Insertion conversion list not found');
    return;
  }
  
  insertionConversionCounter.textContent = `Conversion ${currentInsertionConversion + 1} of ${appData.codeConversion.insertionSort.length}`;
  
  const items = insertionConversionList.querySelectorAll('.conversion-item');
  console.log('Found', items.length, 'conversion items');
  
  items.forEach((item, index) => {
    item.classList.toggle('active', index === currentInsertionConversion);
  });
  
  if (prevInsertionConversionBtn) {
    prevInsertionConversionBtn.disabled = currentInsertionConversion === 0;
  }
  if (nextInsertionConversionBtn) {
    nextInsertionConversionBtn.disabled = currentInsertionConversion === appData.codeConversion.insertionSort.length - 1;
  }
}

// Navigate bubble sort code conversion
function navigateBubbleConversion(direction) {
  const newStep = currentBubbleConversion + direction;
  if (newStep >= 0 && newStep < appData.codeConversion.bubbleSort.length) {
    currentBubbleConversion = newStep;
    updateBubbleConversion();
  }
}

// Update bubble sort code conversion
function updateBubbleConversion() {
  console.log('Updating bubble conversion, step:', currentBubbleConversion);
  
  if (!bubbleConversionCounter) {
    console.log('Bubble conversion counter not found');
    return;
  }
  
  if (!bubbleConversionList) {
    console.log('Bubble conversion list not found'); 
    return;
  }
  
  bubbleConversionCounter.textContent = `Conversion ${currentBubbleConversion + 1} of ${appData.codeConversion.bubbleSort.length}`;
  
  const items = bubbleConversionList.querySelectorAll('.conversion-item');
  console.log('Found', items.length, 'bubble conversion items');
  
  items.forEach((item, index) => {
    item.classList.toggle('active', index === currentBubbleConversion);
  });
  
  if (prevBubbleConversionBtn) {
    prevBubbleConversionBtn.disabled = currentBubbleConversion === 0;
  }
  if (nextBubbleConversionBtn) {
    nextBubbleConversionBtn.disabled = currentBubbleConversion === appData.codeConversion.bubbleSort.length - 1;
  }
}

// Update pseudocode highlighting
function updatePseudocodeHighlighting(pseudocodeElement, highlightLineIndex) {
  if (!pseudocodeElement) return;
  
  const lines = pseudocodeElement.querySelectorAll('.code-line');
  lines.forEach((line, index) => {
    line.classList.toggle('highlighted', index === highlightLineIndex);
  });
}

// Update variables display
function updateVariablesDisplay(variablesElement, variables) {
  if (!variablesElement || !variables) return;
  
  let html = '<strong>Variables:</strong> ';
  const variableStrings = [];
  
  for (const [key, value] of Object.entries(variables)) {
    const displayValue = value === null ? 'null' : value;
    variableStrings.push(`<span class="variable"><span class="variable-name">${key}</span> = <span class="variable-value">${displayValue}</span></span>`);
  }
  
  html += variableStrings.join(' ');
  variablesElement.innerHTML = html;
}

// Render array visualization
function renderArray(container, array, getElementClass) {
  if (!container) return;
  
  container.innerHTML = '';
  
  array.forEach((value, index) => {
    const element = document.createElement('div');
    element.className = `array-element ${getElementClass(index)}`;
    element.textContent = value;
    container.appendChild(element);
  });
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
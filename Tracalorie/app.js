// Storage Controller

// Item Controller
const ItemCtrl = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure / State
  const data = {
    items: [
      { id: 0, name: "Steak Dinner", calories: 1200 },
      { id: 0, name: "Cookie", calories: 400 },
      { id: 0, name: "Eggs", calories: 300 },
    ],
    currentItem: null,
    totalcalories: 0,
  };

  // Public methods
  return {
    logData: function () {
      return data;
    },
  };
})();

// UI Controller
const UICtrl = (function () {
  // Public methods
  return {};
})();

// App Controller
const App = (function (ItemCtrl, UICtrl) {
  // Public methods
  return {
    init: function () {
      console.log("Initializing App...");
    },
  };
})(ItemCtrl, UICtrl);

// Initialize App
App.init();

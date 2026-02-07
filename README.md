# Grocery Bud 🛒

A simple, modern grocery list app that helps you manage your shopping items with ease. Built with vanilla JavaScript, HTML, and CSS.

## Features

✨ **Key Features:**
- ➕ Add grocery items to your list
- ✏️ Edit existing items
- ✅ Mark items as completed with checkbox
- 🗑️ Delete items from your list
- 💾 **Persistent Storage** - Your list is automatically saved to local storage and persists across browser sessions
- 🎨 Beautiful, modern UI with gradient backgrounds and smooth animations
- 📱 Responsive design

## Project Structure

```
grocery_bud/
├── index.html              # Main HTML file
├── README.md              # This file
├── css/
│   ├── global.css         # Global styles (body, layout)
│   ├── form.css           # Form styling
│   ├── items.css          # Items container styling
│   └── single-item.css    # Individual item styling
└── js/
    ├── app.js             # Main application logic
    ├── form.js            # Form handling
    ├── items.js           # Items container component
    ├── single-item.js     # Single item component
    └── data.js            # Data initialization
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No dependencies required - vanilla JavaScript only!

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd grocery_bud
```

2. Open `index.html` in your web browser:
   - Double-click the file, or
   - Open it with your preferred browser

## Usage

1. **Add an Item**: Type the item name in the input field and click "Add Item" button
2. **Mark as Complete**: Check the checkbox next to an item to mark it as completed (adds strikethrough)
3. **Edit an Item**: Click the edit button (pencil icon) to edit the item name
4. **Delete an Item**: Click the delete button (trash icon) to remove the item from your list

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, transitions, and animations
- **JavaScript (ES6+)** - Module-based vanilla JavaScript
- **LocalStorage API** - For persistent data storage
- **Font Awesome 7.0** - Icon library

## Features Explained

### Local Storage
Your grocery list is automatically saved to the browser's local storage every time you:
- Add a new item
- Mark an item as completed
- Update an item name
- Delete an item

The list persists across browser sessions - your items will still be there when you return!

### Modern UI
The app features:
- Purple-blue gradient background
- Smooth hover animations
- Box shadows and transitions
- Responsive design that works on all screen sizes
- Interactive buttons with gradient effects

## Browser Support

✅ Chrome (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Edge (latest)  

## Completed Features

Recently implemented:
- [x] Due dates for items - Add optional due dates to items with smart formatting (Today, Tomorrow, or date)

## Future Enhancements

Possible features for future versions:
- [ ] Categories for different types of items
- [ ] Priority levels (high, medium, low)
- [ ] Share list with others
- [ ] Dark mode toggle
- [ ] Multiple lists support



## Author

Created as a modern grocery list management application.

---

**Happy Shopping!** 🛍️

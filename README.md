# VISTA Check-in System

A professional frontend airline check-in management interface built with HTML, CSS, and JavaScript. This static web application provides a clean, responsive interface for airline staff to manage passenger check-ins and view flight information.

## Preview

<img width="1918" height="919" alt="image" src="https://github.com/user-attachments/assets/cfccb4bd-c52f-43b6-8d1a-7eba14166723" />
<img width="1891" height="917" alt="image" src="https://github.com/user-attachments/assets/4622b902-25e2-4fd0-a813-7d197a69f3a9" />
<img width="1915" height="915" alt="image" src="https://github.com/user-attachments/assets/f415da17-b8c2-4c69-8684-ada6d53b45c9" />


*Professional airline check-in management interface with responsive design*

## Features

- **Responsive Design** - Works seamlessly on desktop, laptop, tablet, and mobile devices
- **Professional UI** - Clean interface with VISTA airline branding
- **Interactive Forms** - Passenger check-in form with validation and styling
- **Data Table** - Sortable, searchable passenger records with pagination
- **Modal Windows** - Detailed passenger information popups
- **Modern Styling** - CSS Grid, Flexbox, and professional animations

## Technologies

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with custom properties and responsive design
- **JavaScript** - Interactive functionality and DOM manipulation
- **Bootstrap 5** - UI components and responsive grid
- **DataTables** - Enhanced table functionality
- **Font Awesome** - Professional icons

## Project Structure

```
vista-checking-system/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   ├── js/
│   │   └── script.js      # JavaScript functionality
│   └── images/            # Images and icons
│       ├── logo.png
│       ├── profile_pic.png
│       ├── back_triangle.png
│       └── ...
└── README.md
```

## Quick Start

1. **Clone or Download**
   ```bash
   git clone https://github.com/your-username/vista-checking-system.git
   ```

2. **Open in Browser**
   - Double-click `index.html` to open in your default browser
   - Or drag and drop the file into any web browser

## Features Overview

### Check-in Form
- Passenger name input
- Membership number and flight details
- Lounge and airline selection
- Date/time picker for flights
- Entrance reason and remarks

### Data Table
- View all passenger check-ins
- Search functionality
- Sortable columns
- Pagination controls
- Action buttons for detailed view

### Responsive Breakpoints
- **Mobile**: 320px - 480px
- **Tablet**: 481px - 767px  
- **Laptop**: 768px - 1199px
- **Desktop**: 1200px+

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #3A4A70;
    --brown-color: #492400;
    --light-gray: #C9C8C8;
}
```

### Layout
- Modify HTML structure in `index.html`
- Update responsive breakpoints in CSS
- Customize form fields and table columns

### Styling
- All styles contained in `assets/css/styles.css`
- Uses CSS Grid and Flexbox for layout
- Mobile-first responsive approach

## File Details

### `index.html`
- Complete HTML structure
- External CDN links for Bootstrap, DataTables, Font Awesome
- Form elements and data table markup
- Modal windows for logout and passenger details

### `assets/css/styles.css`
- Professional styling with CSS variables
- Responsive design for all screen sizes
- Custom components and animations
- DataTables integration styling

### `assets/js/script.js`
- Form handling and validation
- Modal window controls
- DataTables initialization
- Interactive functionality

## Development

### Adding New Features
1. Update HTML structure as needed
2. Add corresponding CSS styles
3. Implement JavaScript functionality
4. Test across different screen sizes

### Testing
- Test on multiple browsers
- Verify responsive behavior
- Check form validation
- Ensure modal functionality works

## Deployment

### Static Hosting Options
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Any web server

### Simple Deployment
1. Upload all files to web server
2. Ensure proper file permissions
3. Access via domain/subdomain
4. No server-side configuration needed

## Performance

- Optimized CSS with minimal redundancy
- External libraries loaded from CDN
- Compressed images
- Minimal JavaScript footprint

## License

MIT License - feel free to use and modify for your projects.

---

A clean, professional frontend interface for airline check-in management.

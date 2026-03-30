# Amazon Dropshipping Website Specification

## Project Overview
- **Project Name**: DropZone - Amazon Product Showcase
- **Type**: Single-page web application (multi-view)
- **Core Functionality**: Display Amazon products with ratings, search, and related product suggestions
- **Target Users**: Online shoppers looking for product recommendations

## UI/UX Specification

### Layout Structure

**Header (Fixed)**
- Logo on left: "DropZone" with shopping bag icon
- Search bar center: rounded input with search icon
- Navigation: Home, Categories dropdown

**Hero Section (Home)**
- Subtle gradient background with floating shapes
- Tagline: "Discover Quality Products"
- Animated search prompt

**Product Grid**
- 4 columns desktop, 2 tablet, 1 mobile
- Card-based product display
- Lazy load animation on scroll

**Product Detail Modal/Page**
- Image gallery (main image + thumbnails)
- Product info panel
- Star rating with review count
- Price display
- "View on Amazon" CTA button
- "You May Also Like" section

**Footer**
- Simple copyright text
- "Powered by" attribution

### Visual Design

**Color Palette**
- Background: #0a0a0f (deep night)
- Surface: #14141f (card background)
- Surface Elevated: #1e1e2d (hover states)
- Primary: #ff6b35 (vibrant orange)
- Primary Hover: #ff8555
- Accent: #00d4aa (teal for ratings)
- Text Primary: #ffffff
- Text Secondary: #8b8b9e
- Border: #2a2a3d

**Typography**
- Headings: "Outfit", sans-serif (Google Fonts)
- Body: "DM Sans", sans-serif (Google Fonts)
- Logo: 28px bold
- Product Title: 16px semibold
- Body: 14px regular
- Small: 12px

**Spacing System**
- Base unit: 8px
- Card padding: 20px
- Section gap: 48px
- Grid gap: 24px

**Visual Effects**
- Cards: subtle glow on hover (box-shadow with primary color)
- Buttons: scale(1.02) on hover with transition
- Page transitions: fade in (300ms)
- Staggered card reveals on load
- Star ratings: subtle pulse animation

### Components

**Product Card**
- Image container (aspect-ratio 1:1, object-fit cover)
- Category badge (top-left)
- Wishlist heart icon (top-right)
- Product title (2 lines max, ellipsis)
- Star rating (visual stars + count)
- Price
- "View Deal" button

**Star Rating**
- 5 stars using Unicode ★
- Filled stars: #00d4aa (accent)
- Empty stars: #3a3a4d
- Shows numeric rating: "4.5 (2,341 reviews)"

**Search Bar**
- Rounded input (border-radius: 50px)
- Search icon inside
- Placeholder: "Search products..."
- Focus state: primary color border glow

**Category Pills**
- Horizontal scrollable on mobile
- Active state: filled primary color
- Categories: Electronics, Home & Kitchen, Fashion, Sports, Beauty, Toys

## Functionality Specification

### Core Features

1. **Product Display**
   - Show 12 mock products initially
   - Each product: id, name, category, image, price, rating, reviewCount, description, amazonUrl
   - Filter by category
   - Sort by: Featured, Price Low-High, Price High-Low, Rating

2. **Search**
   - Real-time search as user types (debounced 300ms)
   - Search by product name and category
   - Show "No results" state

3. **Product Detail View**
   - Click product card opens detail view (modal or page)
   - Display: large image, full description, rating, price, Amazon link
   - "You May Also Like": 4 related products (same category)

4. **5-Star Rating System**
   - Display visual stars
   - Show numeric rating (e.g., 4.7)
   - Show review count
   - Calculate from mock data

5. **Amazon Redirect**
   - "View on Amazon" button
   - Opens Amazon product page in new tab

### User Interactions
- Hover on cards: elevate with shadow
- Click card: open detail view
- Click search: filter products
- Click category: filter products
- Click "View on Amazon": redirect

### Data Handling
- Mock product data in JavaScript
- LocalStorage for recently viewed (optional)

### Edge Cases
- No search results: show friendly message
- Image load error: show placeholder
- Long titles: truncate with ellipsis

## Acceptance Criteria

1. ✓ Home page displays product grid with 12+ products
2. ✓ Search bar filters products in real-time
3. ✓ Category filters work correctly
4. ✓ Clicking product shows detail modal/page
5. ✓ Star ratings display correctly with review counts
6. ✓ "You May Also Like" shows related products
7. ✓ "View on Amazon" button redirects to Amazon
8. ✓ Responsive design works on mobile/tablet/desktop
9. ✓ Smooth animations and transitions
10. ✓ No console errors on load

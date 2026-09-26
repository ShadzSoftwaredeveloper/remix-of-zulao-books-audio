# Header and WhatsApp Cart

## Changes
- Remove Home from the desktop and mobile navigation.
- Remove the search and Instagram controls.
- Restyle “Book Joseph” as an outlined secondary button.
- Add a cart icon with a live item-count badge to desktop and mobile headers.
- Let visitors add books to the cart from the book details window.
- Add a cart panel with book covers, prices, quantity controls, remove actions, subtotal, and an empty state.
- Persist the cart between visits and send the complete itemized order through WhatsApp at checkout.

## Technical details
- Use a shared React cart provider backed by browser storage.
- Reuse the existing book data and WhatsApp number.
- Build controls from the existing design system and semantic theme colors.
- Verify adding, changing quantity, removing, persistence, and WhatsApp checkout at desktop and mobile sizes.

Here is the Basic example of how the Navigation in our Application is.

src/
├── app/
│ │
│ ├── _layout.tsx
│ │
│ ├── (tabs)/
│ │ ├── _layout.tsx
│ │ │
│ │ ├── (home)/
│ │ │ ├── _layout.tsx
│ │ │ ├── index.tsx
│ │ │ ├── bus/
│ │ │ │ └── [busId].tsx
│ │ │ └── route/
│ │ │ └── [routeId].tsx
│ │ │
│ │ ├── search/
│ │ │ └── index.tsx
│ │ │
│ │ ├── bookings/
│ │ │ ├── _layout.tsx
│ │ │ ├── index.tsx
│ │ │ └── [bookingId].tsx
│ │ │
│ │ └── profile/
│ │ ├── _layout.tsx
│ │ ├── index.tsx
│ │ └── settings.tsx
│ │
│ ├── login.tsx
│ └── +not-found.tsx
│
├── components/
├── hooks/
├── services/
├── constants/
├── types/
└── utils/

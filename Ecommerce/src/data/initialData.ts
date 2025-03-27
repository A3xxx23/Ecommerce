// src/data/allClothes.js
export const newArrivalsProducts = [
    {
        brand: 'Nike',
        colors: [
            { color: '#FF5733', color_name: 'Red' },
            { color: '#000000', color_name: 'Black' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'High-quality Nike t-shirt, perfect for training and everyday wear.',
                        },
                    ],
                },
            ],
        },
        features: ['100% cotton', 'Breathable', 'Modern design'],
        id: 'b2c3d4ea-2a40-4ec7-a6d0-b7c95888ff',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Nike T-Shirt',
        price: 29.99,
        slug: 'nike-t-shirt',
        variants: [
            {
                color: '#FF5733',
                color_name: 'Red',
                id: 'f1e814b7-fe26-4e08-8a6f-13a39da43e52',
                price: 29.99,
                stock: 50,
                size: 'M',
            },
            {
                color: '#000000',
                color_name: 'Black',
                id: 'f1e814b7-fe26-4e08-8a6f-13a39da43e53',
                price: 29.99,
                stock: 30,
                size: 'L',
            },
        ],
    },
    {
        brand: 'Zara',
        colors: [
            { color: '#FFFFFF', color_name: 'White' },
            { color: '#0000FF', color_name: 'Blue' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Zara shirt, perfect for formal and casual occasions.',
                        },
                    ],
                },
            ],
        },
        features: ['Lightweight material', 'Comfortable fit', 'Elegant style'],
        id: 'c3d4ea-2a40-4ec7-a6d0-b7c95888ff',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Zara Shirt',
        price: 49.99,
        slug: 'zara-shirt',
        variants: [
            {
                color: '#FFFFFF',
                color_name: 'White',
                id: 'g2h814b7-fe26-4e08-8a6f-13a39da43e54',
                price: 49.99,
                stock: 20,
                size: 'S',
            },
            {
                color: '#0000FF',
                color_name: 'Blue',
                id: 'g2h814b7-fe26-4e08-8a6f-13a39da43e55',
                price: 49.99,
                stock: 15,
                size: 'M',
            },
        ],
    },
    {
        brand: 'Adidas',
        colors: [
            { color: '#FFFFFF', color_name: 'White' },
            { color: '#FFCC00', color_name: 'Yellow' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Adidas sports pants, ideal for the gym and outdoor activities.',
                        },
                    ],
                },
            ],
        },
        features: ['Quick-drying', 'Elastic waistband', 'Sporty style'],
        id: 'd4e5f6ea-2a40-4ec7-a6d0-b7c95888ff',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Adidas Pants',
        price: 59.99,
        slug: 'adidas-pants',
        variants: [
            {
                color: '#FFFFFF',
                color_name: 'White',
                id: 'h3i814b7-fe26-4e08-8a6f-13a39da43e56',
                price: 59.99,
                stock: 25,
                size: 'L',
            },
            {
                color: '#FFCC00',
                color_name: 'Yellow',
                id: 'h3i814b7-fe26-4e08-8a6f-13a39da43e57',
                price: 59.99,
                stock: 10,
                size: 'XL',
            },
        ],
    },
    {
        brand: 'H&M',
        colors: [
            { color: '#000000', color_name: 'Black' },
            { color: '#FFC0CB', color_name: 'Pink' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Stylish H&M dress, perfect for summer outings and parties.',
                        },
                    ],
                },
            ],
        },
        features: ['Lightweight fabric', 'Flattering fit', 'Versatile style'],
        id: 'e5f6g7ea-2a40-4ec7-a6d0-b7c95888ff',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'H&M Summer Dress',
        price: 39.99,
        slug: 'hm-summer-dress',
        variants: [
            {
                color: '#000000',
                color_name: 'Black',
                id: 'i4j814b7-fe26-4e08-8a6f-13a39da43e58',
                price: 39.99,
                stock: 40,
                size: 'M',
            },
            {
                color: '#FFC0CB',
                color_name: 'Pink',
                id: 'i4j814b7-fe26-4e08-8a6f-13a39da43e59',
                price: 39.99,
                stock: 30,
                size: 'S',
            },
        ],
    },
    {
        brand: 'Puma',
        colors: [
            { color: '#FF0000', color_name: 'Red' },
            { color: '#008000', color_name: 'Green' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Puma joggers, designed for comfort and style during workouts.',
                        },
                    ],
                },
            ],
        },
        features: ['Soft fabric', 'Elastic cuffs', 'Sporty look'],
        id: 'f7g8h9ea-2a40-4ec7-a6d0-b7c95888ff',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Puma Joggers',
        price: 49.99,
        slug: 'puma-joggers',
        variants: [
            {
                color: '#FF0000',
                color_name: 'Red',
                id: 'j5k814b7-fe26-4e08-8a6f-13a39da43e60',
                price: 49.99,
                stock: 20,
                size: 'M',
            },
            {
                color: '#008000',
                color_name: 'Green',
                id: 'j5k814b7-fe26-4e08-8a6f-13a39da43e61',
                price: 49.99,
                stock: 15,
                size: 'L',
            },
        ],
    },
    {
        brand: 'Levi’s',
        colors: [
            { color: '#0000FF', color_name: 'Blue' },
            { color: '#A52A2A', color_name: 'Brown' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Classic Levi’s jeans, a must-have for every wardrobe.',
                        },
                    ],
                },
            ],
        },
        features: ['Durable denim', 'Classic fit', 'Versatile style'],
        id: 'g9h0i1ea-2a40-4ec7-a6d0-b7c95888ff',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Louis Vuitton Classic Jeans',
        price: 59.99,
        slug: 'Louis Vuitton-classic-jeans',
        variants: [
            {
                color: '#0000FF',
                color_name: 'Blue',
                id: 'k6l814b7-fe26-4e08-8a6f-13a39da43e62',
                price: 59.99,
                stock: 35,
                size: '32',
            },
            {
                color: '#A52A2A',
                color_name: 'Brown',
                id: 'k6l814b7-fe26-4e08-8a6f-13a39da43e63',
                price: 59.99,
                stock: 20,
                size: '34',
            },
        ],
    },
    {
        brand: 'Uniqlo',
        colors: [
            { color: '#FFFFFF', color_name: 'White' },
            { color: '#000000', color_name: 'Black' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Uniqlo ultra light down jacket, perfect for chilly weather.',
                        },
                    ],
                },
            ],
        },
        features: ['Lightweight', 'Packable', 'Warm'],
        id: 'h1i2j3ea-2a40-4ec7-a6d0-b7c95888ff',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Uniqlo Down Jacket',
        price: 79.99,
        slug: 'uniqlo-down-jacket',
        variants: [
            {
                color: '#FFFFFF',
                color_name: 'White',
                id: 'm6n814b7-fe26-4e08-8a6f-13a39da43e64',
                price: 79.99,
                stock: 15,
                size: 'M',
            },
            {
                color: '#000000',
                color_name: 'Black',
                id: 'm6n814b7-fe26-4e08-8a6f-13a39da43e65',
                price: 79.99,
                stock: 10,
                size: 'L',
            },
        ],
    },
    {
        brand: 'Gap',
        colors: [
            { color: '#FFD700', color_name: 'Gold' },
            { color: '#C0C0C0', color_name: 'Silver' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Gap hoodie, perfect for casual outings and lounging at home.',
                        },
                    ],
                },
            ],
        },
        features: ['Soft fleece', 'Kangaroo pocket', 'Relaxed fit'],
        id: 'i2j3k4ea-2a40-4ec7-a6d0-b7c95888ff',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Gap Hoodie',
        price: 49.99,
        slug: 'gap-hoodie',
        variants: [
            {
                color: '#FFD700',
                color_name: 'Gold',
                id: 'n7o814b7-fe26-4e08-8a6f-13a39da43e66',
                price: 49.99,
                stock: 25,
                size: 'L',
            },
            {
                color: '#C0C0C0',
                color_name: 'Silver',
                id: 'n7o814b7-fe26-4e08-8a6f-13a39da43e67',
                price: 49.99,
                stock: 20,
                size: 'M',
            },
        ],
    },
];


export const FeaturesProducts = [
    {
        brand: 'Nike',
        colors: [
            { color: '#FF5733', color_name: 'Red' },
            { color: '#000000', color_name: 'Black' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'High-quality Nike t-shirt, perfect for training and everyday wear.',
                        },
                    ],
                },
            ],
        },
        features: ['100% cotton', 'Breathable', 'Modern design'],
        id: 'b2c3d4ea-2a40-4ec7-a6d0-b7c95888ff',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Nike T-Shirt',
        price: 29.99,
        slug: 'nike-t-shirt',
        variants: [
            {
                color: '#FF5733',
                color_name: 'Red',
                id: 'f1e814b7-fe26-4e08-8a6f-13a39da43e52',
                price: 29.99,
                stock: 50,
                size: 'M',
            },
            {
                color: '#000000',
                color_name: 'Black',
                id: 'f1e814b7-fe26-4e08-8a6f-13a39da43e53',
                price: 29.99,
                stock: 30,
                size: 'L',
            },
        ],
    },
    {
        brand: 'Zara',
        colors: [
            { color: '#FFFFFF', color_name: 'White' },
            { color: '#0000FF', color_name: 'Blue' },
        ],
        created_at: new Date().toISOString(),
        description: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'Zara shirt, perfect for formal and casual occasions.',
                        },
                    ],
                },
            ],
        },
        features: ['Lightweight material', 'Comfortable fit', 'Elegant style'],
        id: 'c3d4ea-2a40-4ec7-a6d0-b7c95888ff',
        img: ['https://ui.shadcn.com/placeholder.svg'],
        name: 'Zara Shirt',
        price: 49.99,
        slug: 'zara-shirt',
        variants: [
            {
                color: '#FFFFFF',
                color_name: 'White',
                id: 'g2h814b7-fe26-4e08-8a6f-13a39da43e54',
                price: 49.99,
                stock: 20,
                size: 'S',
            },
            {
                color: '#0000FF',
                color_name: 'Blue',
                id: 'g2h814b7-fe26-4e08-8a6f-13a39da43e55',
                price: 49.99,
                stock: 15,
                size: 'M',
            },
        ],
    },
]
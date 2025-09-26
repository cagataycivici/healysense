export const size = {
    width: 32,
    height: 32
};

export const contentType = 'image/svg+xml';

export default function Icon() {
    return new Response(
        `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 40" fill="none">
            <g clipPath="url(#clip0_7009_11660)">
                <path d="M0.499817 6.66717V19.999L12.0465 13.3342V0.00012207L0.499817 6.66717Z" fill="white" />
                <path d="M0.499817 33.3331L12.0465 26.6661V13.3343L0.499817 19.999V33.3331Z" fill="#DDD2EF" />
                <path d="M23.5932 19.9988L12.0466 13.3341L0.499878 19.9988L12.0466 26.6659L23.5932 19.9988Z" fill="#531FAE" />
                <path d="M23.5932 19.9988L12.0466 13.3341L0.499878 19.9988L12.0466 26.6659L23.5932 19.9988Z" fill="white" fill-opacity="0.6" />
                <path d="M23.5932 6.66718L12.0466 13.3342V26.666L23.5932 19.999V6.66718Z" fill="#DDD2EF" />
                <path d="M23.5932 33.3331V19.999L12.0466 26.6661V40.0002L23.5932 33.3331Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_7009_11660">
                    <rect width="23.0934" height="40" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>`,
        {
            headers: {
                'content-type': 'image/svg+xml'
            }
        }
    );
}

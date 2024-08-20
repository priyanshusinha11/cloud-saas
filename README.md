# Cloud SaaS Application

Welcome to the Cloud SaaS application! This application allows users to log in, upload images, crop them for various social media formats (e.g., Instagram portraits, Facebook covers), upload videos, and download compressed versions of those videos.

## Features

- **User Authentication**: Secure user login and registration using [Clerk](https://clerk.dev/).
- **Image Upload and Cropping**: Upload images and crop them according to popular social media dimensions.
- **Video Upload and Compression**: Upload videos and download compressed versions to save storage and bandwidth.
- **Cloudinary Integration**: Handle all file operations efficiently using [Cloudinary](https://cloudinary.com/).
- **Responsive UI**: Enhanced UI components with [DaisyUI](https://daisyui.com/).
- **Database**: Uses [Prisma](https://www.prisma.io/) with [NeonDB](https://neon.tech/) for database management.
- **API Handling**: API requests are managed using [Axios](https://axios-http.com/).

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **File Storage and Operations**: [Cloudinary](https://cloudinary.com/)
- **Database**: [Prisma](https://www.prisma.io/) with [NeonDB](https://neon.tech/)
- **UI Components**: [DaisyUI](https://daisyui.com/)
- **API Handling**: [Axios](https://axios-http.com/)

## Installation

1. **Clone the repository**:
    ```bash
    git clone git@github.com:priyanshusinha11/cloud-saas.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd cloud-saas
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Set up environment variables**: Create a `.env.local` file in the root of your project and add the following variables:
    ```bash
   refer the .env.sample file in the root
    ```

5. **Run the development server**:
    ```bash
    npm run dev
    ```

6. **Open the app**: Go to [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- **Log In**: Users can log in or sign up using their email.
- **Upload and Crop Images**: After logging in, users can upload images, choose a preset crop size, and download the cropped image.
- **Upload and Compress Videos**: Users can upload videos and download the compressed versions.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact [priyanshu.eleven.dev@gmail.com](mailto:priyanshu.eleven.dev@gmail.com).

---

[GitHub Repository](git@github.com:priyanshusinha11/cloud-saas.git)

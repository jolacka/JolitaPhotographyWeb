import { v2 as cloudinary } from 'cloudinary'
import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();

// Configure Cloudinary with credentials from .env
cloudinary.config({
	cloud_name: process.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.PUBLIC_CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
})

export default class CloudinaryService {
	static async fetchImages(folder) {
		try {
			const result = await cloudinary.search
				.expression(`folder:${folder}`)
				.sort_by('public_id', 'desc')
				.max_results(4)
				.execute()
			
			// Return image details with width and height for each image
			return result.resources.map((resource) => ({
				src: resource.secure_url,
				width: resource.width,
				height: resource.height
			}))
		} catch (error) {
			console.error('Error fetching images from Cloudinary:', error)
			return []
		}
	}
}

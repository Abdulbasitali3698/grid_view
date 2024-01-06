import Image from 'next/image'

export default function Home() {
  return (
    <main >
        <div class="container mx-auto">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* <!-- Replace the image URLs with your own --> */}
      <div class="p-4">
        <img src="https://via.placeholder.com/150" alt="Image 1" class="w-full h-40 object-cover">
      </div>
      <div class="p-4">
        <img src="https://via.placeholder.com/150" alt="Image 2" class="w-full h-40 object-cover">
      </div>
      <div class="p-4">
        <img src="https://via.placeholder.com/150" alt="Image 3" class="w-full h-40 object-cover">
      </div>
      <!-- Add more image elements as needed -->
    </div>
  </div>
    </main>
  )
}

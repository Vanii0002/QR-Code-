import imageqr from "../assets/image-qr-code.png"

function Card() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white w-[350px] h-[520px] rounded-2xl p-4 shadow-xl shadow-blue-900 hover:scale-110 transform duration-60">

        {/* IMAGE */}
        <img
          src={imageqr}
          alt="QR"
          className="rounded-xl w-full"
        />

        {/* TEXT */}
        <h1 className="font-bold text-xl text-center mt-6">
          Improve your front-end <br />
          skills by building projects
        </h1>

        <p className="text-sm text-gray-500 text-center mt-4 px-4">
          Scan the QR code to visit Frontend Mentor and take your coding
          skills to the next level
        </p>

      </div>
    </div>
  )
}

export default Card

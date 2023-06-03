import 'dotenv/config'

import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

async function runModel() {
  const output = await replicate.run(
    "runvnc/controlnet4:4dd5d235b4794f2bf8519422325cac1a362dcbe72e05f3458ed2d43e0e199d4e",
    {
      input: {
	image: "https://aidev.codes/logo1new.png",
	structure: "scribble",
	prompt: "the sun sets"
      }
    }
  )
}


runModel()

setInterval( runModel, 1000 * 60 * 9.5 )


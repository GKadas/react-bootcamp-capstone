import React, {useContext} from "react"
import {Context} from "../AppContext"

import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {
  const {gallery} = useContext(Context)

    const imageElements = gallery.map((photo, i) => (
      <Image key={photo.id} img={photo} className={getClass(i)} />
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos

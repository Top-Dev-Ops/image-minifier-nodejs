import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngquant from 'imagemin-pngquant';

(async () => {
    const files = await imagemin(['./img/*.{jpg,png}'], {
        destination: "./minimg",
        plugins: [
            imageminMozjpeg({ quality: 80 }),
            imageminPngquant(),
            // imageminPngquant({
            //     quality: [.6, .8]
            // })
        ]
    })
    console.log(files)
})()

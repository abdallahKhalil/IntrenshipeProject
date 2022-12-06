<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Auto Email</title>
    <style>
        body {
            font-family: 'Nunito', sans-serif;
            align-items: center;
        }
    </style>
</head>
<body class="antialiased">
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0 items-center">
        <div class="m-auto bg-gray-100 bg-auto rounded-xl shadow-md drop-shadow-md w-1/2 h-auto items-center">
            <h1 class="text-6xl leading-normal mt-0 mb-1 text-slate-800">Our Valued Client</h1>
            <h4 class="text-xl font-normal leading-normal mt-0 mb-24 text-slate-800">Here are few of the result found</h4>
        </div>
        <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">price:</th>
                        <th scope="col" className="py-3 px-6">size:</th>
                        <th scope="col" className="py-3 px-6">bathrooms:</th>
                        <th scope="col" className="py-3 px-6">bedrooms:</th>
                        <th scope="col" className="py-3 px-6">City:</th>
                        <th scope="col" className="py-3 px-6">road:</th>
                    </tr>
                </thead>
                @foreach ($posts as $post)
                <tbody>

                    <tr>
                        <td className="py-2 px-6">{{$post->price}} $</td>
                        <td className="py-2 px-6">{{$post->size}} m2</td>
                        <td className="py-2 px-6">{{$post->n_bathroom}}</td>
                        <td className="py-2 px-6">{{$post->n_bedroom}}</td>
                        <td className="py-2 px-6">{{$post->city}}</td>
                        <td className="py-2 px-6">{{$post->road}}</td>
                    </tr>

                </tbody>
                @endforeach
            </table>
        </div>
    </div>
    
</body>
</html>
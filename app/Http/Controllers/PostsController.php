<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;
use App\Models\HousePosts;
use App\Models\image;
use App\Models\categories;
use App\Models\status;
use App\Models\favorite;
use App\Models\address;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Mail;
use App\Mail\automaticMail;
use Symfony\Component\HttpFoundation\Response;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getBuyPosts(Request $request)
    {
       $status="";
       if(isset($request->state)){
        $status="&state=".$request->state;
        $posts  = HousePosts::with("favorite")
        ->join('image', 'product.id' , '=', 'image.product_id')
        ->join('address', 'product.id' , '=', 'address.product_id')
        ->join('status', 'product.id' , '=', 'status.product_id')
        ->where('status.status', '=', 'sell')
        ->select('product.price',
         'product.size', 'product.n_bedroom','product.id',
          'product.n_bathroom','product.description',
          'image.image',
            'address.city', 'address.road','status.status')
        ->orderBy('product.price', 'ASC');;
        //->get();
       }else if(isset($request->size1)){
        $status="&size1=".$request->size1;
        $posts  = HousePosts::with("favorite")
        ->join('image', 'product.id' , '=', 'image.product_id')
        ->join('address', 'product.id' , '=', 'address.product_id')
        ->join('status', 'product.id' , '=', 'status.product_id')
        ->where('status.status', '=', 'sell')
        ->select('product.price',
         'product.size', 'product.n_bedroom','product.id',
          'product.n_bathroom','product.description',
          'image.image',
            'address.city', 'address.road','status.status')
        ->orderBy('product.size', 'ASC');
        //->get();
       }
       else if(isset($request->size2)){
        $status="&size2=".$request->size2;
        $posts  = HousePosts::with("favorite")
        ->join('image', 'product.id' , '=', 'image.product_id')
        ->join('address', 'product.id' , '=', 'address.product_id')
        ->join('status', 'product.id' , '=', 'status.product_id')
        ->where('status.status', '=', 'sell')
        ->select('product.price',
         'product.size', 'product.n_bedroom','product.id',
          'product.n_bathroom','product.description',
          'image.image',
            'address.city', 'address.road','status.status')
        ->orderBy('product.size', 'DESC');
        //->get();
       }else if(isset($request->house)){
        $status="&house=".$request->house;
        $posts  = HousePosts::with("favorite")
        ->join('image', 'product.id' , '=', 'image.product_id')
        ->join('address', 'product.id' , '=', 'address.product_id')
        ->join('status', 'product.id' , '=', 'status.product_id')
        ->join('categories', 'product.id', '=', 'categories.product_id')
        ->where('status.status', '=', 'sell')
        ->where('categories.category','=', $request->house)
        ->select('product.price',
         'product.size', 'product.n_bedroom','product.id',
          'product.n_bathroom','product.description',
          'image.image',
            'address.city', 'address.road','status.status');
        //->get();
       }else if(isset($request->apartment)){
        $status="&apartment=".$request->apartment;
        $posts  = HousePosts::with("favorite")
        ->join('image', 'product.id' , '=', 'image.product_id')
        ->join('address', 'product.id' , '=', 'address.product_id')
        ->join('status', 'product.id' , '=', 'status.product_id')
        ->join('categories', 'product.id', '=', 'categories.product_id')
        ->where('status.status', '=', 'sell')
        ->where('categories.category','=', $request->apartment)
        ->select('product.price',
         'product.size', 'product.n_bedroom','product.id',
          'product.n_bathroom','product.description',
          'image.image',
            'address.city', 'address.road','status.status');
        //->get();
       }else if(isset($request->villa)){
        $status="&villa=".$request->villa;
        $posts  = HousePosts::with("favorite")
        ->join('image', 'product.id' , '=', 'image.product_id')
        ->join('address', 'product.id' , '=', 'address.product_id')
        ->join('status', 'product.id' , '=', 'status.product_id')
        ->join('categories', 'product.id', '=', 'categories.product_id')
        ->where('status.status', '=', 'sell')
        ->where('categories.category','=', $request->villa)
        ->select('product.price',
         'product.size', 'product.n_bedroom','product.id',
          'product.n_bathroom','product.description',
          'image.image',
            'address.city', 'address.road','status.status');
        //->get();
       }else if(isset($request->land)){
        $status="&land=".$request->land;
        $posts  = HousePosts::with("favorite")
        ->join('image', 'product.id' , '=', 'image.product_id')
        ->join('address', 'product.id' , '=', 'address.product_id')
        ->join('status', 'product.id' , '=', 'status.product_id')
        ->join('categories', 'product.id', '=', 'categories.product_id')
        ->where('status.status', '=', 'sell')
        ->where('categories.category','=', $request->land)
        ->select('product.price',
         'product.size', 'product.n_bedroom','product.id',
          'product.n_bathroom','product.description',
          'image.image',
            'address.city', 'address.road','status.status');
        //->get();
       }
       else{
        $posts = HousePosts::with("favorite")
        ->join('image', 'product.id' , '=', 'image.product_id')
        ->join('address', 'product.id' , '=', 'address.product_id')
        ->join('status', 'product.id' , '=', 'status.product_id')
        ->where('status.status', '=', 'sell')
        ->select('product.price',
         'product.size', 'product.n_bedroom','product.id',
          'product.n_bathroom','product.description',
          'image.image',
            'address.city', 'address.road','status.status');
       // ->get();
       }
      
       $postsList=$posts->paginate(5);
       $data=json_encode($postsList);
       $data=json_decode($data);
      
       foreach($data->links as $link){
        if($link!=null){
            $link->url=$link->url.$status;
           }
       }
       //return response()->json($data->next_page_url);
        // return response()->json($posts);
        return Inertia::render('Main/BuyP',[
            'posts' => $data
        ]);
    }

    protected $uid;
    public function updateFav($id)
    {     
        $uid = auth()->user()->id;
        $isExist=favorite::where(['product_id'=> $id, 'user_id'=> $uid])->first();
        if(empty($isExist)) {
            favorite::create(['product_id'=> $id, 'user_id'=> $uid, 'favorite'=>true]);
        } else{
         $this->deleteFav($id);
        }
       return Redirect::back();
    }
    public function deleteFav($id)
    {
        $uid = auth()->user()->id;
        $fav=  favorite::where(['product_id'=> $id, 'user_id'=> $uid])->first();
          $fav->delete();
          return Redirect::back();
    }

    public function getFav()
    {
        $posts = DB::table('product')
        ->join('favorite', 'product.id', '=', 'favorite.product_id')
        ->join('image', 'product.id' , '=', 'image.product_id')
        ->join('address', 'product.id' , '=', 'address.product_id')
        ->where('favorite.favorite','=', true)->select('product.id','product.size', 'product.price', 'product.n_bedroom', 'product.n_bathroom', 'product.description',
        'image.image',
        'address.city', 'address.road')->get();
        

        return Inertia::render('Posts/favorite',[ 
            'posts' => $posts
            
        ]);
    }
    public function getRentPosts(Request $request)
    {
        $status="";
        if(isset($request->state)){
         $status="&state=".$request->state;
         $posts  = HousePosts::with("favorite")
         ->join('image', 'product.id' , '=', 'image.product_id')
         ->join('address', 'product.id' , '=', 'address.product_id')
         ->join('status', 'product.id' , '=', 'status.product_id')
         ->where('status.status', '=', 'rent')
         ->select('product.price',
          'product.size', 'product.n_bedroom','product.id',
           'product.n_bathroom','product.description',
           'image.image',
             'address.city', 'address.road','status.status')
         ->orderBy('product.price', 'ASC');;
         //->get();
        }else if(isset($request->size1)){
         $status="&size1=".$request->size1;
         $posts  = HousePosts::with("favorite")
         ->join('image', 'product.id' , '=', 'image.product_id')
         ->join('address', 'product.id' , '=', 'address.product_id')
         ->join('status', 'product.id' , '=', 'status.product_id')
         ->where('status.status', '=', 'rent')
         ->select('product.price',
          'product.size', 'product.n_bedroom','product.id',
           'product.n_bathroom','product.description',
           'image.image',
             'address.city', 'address.road','status.status')
         ->orderBy('product.size', 'ASC');
         //->get();
        }
        else if(isset($request->size2)){
         $status="&size2=".$request->size2;
         $posts  = HousePosts::with("favorite")
         ->join('image', 'product.id' , '=', 'image.product_id')
         ->join('address', 'product.id' , '=', 'address.product_id')
         ->join('status', 'product.id' , '=', 'status.product_id')
         ->where('status.status', '=', 'rent')
         ->select('product.price',
          'product.size', 'product.n_bedroom','product.id',
           'product.n_bathroom','product.description',
           'image.image',
             'address.city', 'address.road','status.status')
         ->orderBy('product.size', 'DESC');
         //->get();
        }else if(isset($request->house)){
         $status="&house=".$request->house;
         $posts  = HousePosts::with("favorite")
         ->join('image', 'product.id' , '=', 'image.product_id')
         ->join('address', 'product.id' , '=', 'address.product_id')
         ->join('status', 'product.id' , '=', 'status.product_id')
         ->join('categories', 'product.id', '=', 'categories.product_id')
         ->where('status.status', '=', 'rent')
         ->where('categories.category','=', $request->house)
         ->select('product.price',
          'product.size', 'product.n_bedroom','product.id',
           'product.n_bathroom','product.description',
           'image.image',
             'address.city', 'address.road','status.status');
         //->get();
        }else if(isset($request->apartment)){
         $status="&apartment=".$request->apartment;
         $posts  = HousePosts::with("favorite")
         ->join('image', 'product.id' , '=', 'image.product_id')
         ->join('address', 'product.id' , '=', 'address.product_id')
         ->join('status', 'product.id' , '=', 'status.product_id')
         ->join('categories', 'product.id', '=', 'categories.product_id')
         ->where('status.status', '=', 'rent')
         ->where('categories.category','=', $request->apartment)
         ->select('product.price',
          'product.size', 'product.n_bedroom','product.id',
           'product.n_bathroom','product.description',
           'image.image',
             'address.city', 'address.road','status.status');
         //->get();
        }else if(isset($request->villa)){
         $status="&villa=".$request->villa;
         $posts  = HousePosts::with("favorite")
         ->join('image', 'product.id' , '=', 'image.product_id')
         ->join('address', 'product.id' , '=', 'address.product_id')
         ->join('status', 'product.id' , '=', 'status.product_id')
         ->join('categories', 'product.id', '=', 'categories.product_id')
         ->where('status.status', '=', 'rent')
         ->where('categories.category','=', $request->villa)
         ->select('product.price',
          'product.size', 'product.n_bedroom','product.id',
           'product.n_bathroom','product.description',
           'image.image',
             'address.city', 'address.road','status.status');
         //->get();
        }else if(isset($request->land)){
         $status="&land=".$request->land;
         $posts  = HousePosts::with("favorite")
         ->join('image', 'product.id' , '=', 'image.product_id')
         ->join('address', 'product.id' , '=', 'address.product_id')
         ->join('status', 'product.id' , '=', 'status.product_id')
         ->join('categories', 'product.id', '=', 'categories.product_id')
         ->where('status.status', '=', 'rent')
         ->where('categories.category','=', $request->land)
         ->select('product.price',
          'product.size', 'product.n_bedroom','product.id',
           'product.n_bathroom','product.description',
           'image.image',
             'address.city', 'address.road','status.status');
         //->get();
        }
        else{
         $posts = HousePosts::with("favorite")
         ->join('image', 'product.id' , '=', 'image.product_id')
         ->join('address', 'product.id' , '=', 'address.product_id')
         ->join('status', 'product.id' , '=', 'status.product_id')
         ->where('status.status', '=', 'rent')
         ->select('product.price',
          'product.size', 'product.n_bedroom','product.id',
           'product.n_bathroom','product.description',
           'image.image',
             'address.city', 'address.road','status.status');
        // ->get();
        }
       
        $postsList=$posts->paginate(5);
        $data=json_encode($postsList);
        $data=json_decode($data);
       
        foreach($data->links as $link){
         if($link!=null){
             $link->url=$link->url.$status;
            }
        }
        //return response()->json($data->next_page_url);
         // return response()->json($posts);
         return Inertia::render('Main/RentP',[
             'posts' => $data
         ]);
     }

    public function getUserPosts($id)
    {        
        $post = DB::table('product')
        ->where('product.user_id', $id)
        ->join('address', 'product.id', '=', 'address.product_id')
        ->join('image', 'product.id' , '=', 'image.product_id')
        ->select('product.price','product.id',
        'product.size', 'product.n_bedroom',
         'product.n_bathroom','product.description',
         'image.image',
           'address.city', 'address.road')
           ->get();

       // return response()->json($post);
        return Inertia::render('Posts/index', [
            'post' => $post

        ]);
    }

    public function getPass(Request $request){

        return Inertia::render('Posts/ChangePass', ['error'=>isset($request->error)?$request->error:""]);
        
    }


    public function resetPassword(Request $request)
    {
        
        # Validation
        $request->validate([
            'oldPassword' => 'required',
            'newPassword' => 'required',
        ]);
        
        #Match The Old Password
        if(!Hash::check($request->oldPassword, auth()->user()->password)){
            //return response()->json(["error"=>"Old Password Doesn't match!"]);
            return redirect()->route("Posts.changePass",["error"=>"Old Password Doesn't match!"]);
        }


        #Update the new Password
        User::whereId(auth()->user()->id)->update([
            'password' => Hash::make($request->newPassword)
        ]);

        //return back()->with("status", "Password changed successfully!");
        return redirect("dashboard");//Redirect::Route('/dashboard');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //the method render all the values that come from sellP page to the store function
        return Inertia::render('Main/SellP');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        // Validator::make($request->all(), [
        //     'image' => ['required'],
        //     'size' => ['required'],
        //     'prices' => ['required'],
        //     'n_bedroom' => ['required'],
        //     'n_bathroom' => ['required'],
        //     'description' => ['required'],
        //     'city' => ['required'],
        //     'road' => ['required'],
        //     'latitude' => ['required'],
        //     'longitude' => ['required'],
        //     'category' => ['required'],
        //     'status' => ['required']
        // ])->validate();


        // return response()->json([$image_path,storage_path('../public')]);
        $post=HousePosts::create([
            'size' => $request->size,
            'price' => $request->price,
            'user_id'=>auth()->user()->id,
            'n_bedroom' => $request->n_bedroom,
            'n_bathroom' => $request->n_bathroom,
            'description' => $request->description
        ]);
        $post->categories()->create([
                'product_id'=>$post->id,
                'category' => $request->category
            ]);
        
        $post->status()->create([
            'product_id'=>$post->id,
            'status' => $request->status
        ]);
        $post-> address()->create([
            'product_id'=>$post->id,
            'city' => $request->city,
            'road' => $request->road,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude
        ]);
        $image_path = '';
        if ($request->hasFile('image')) {
            $image_path = $request->file('image')->store('image', 'storeImg');
            $image_path =url("/")."/".$image_path;
            // return $image_path;
        }
        $post->image()->create([
            'product_id'=>$post->id,
            'image' => $image_path
        ]);
       
        return Redirect::Route('Main.sellP');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $posts = DB::table('product')
        ->where('product.id', $id)
        ->join('address', 'product.id', '=', 'address.product_id')
        ->join('image', 'product.id' , '=', 'image.product_id')
        ->select('product.price','product.id',
        'product.size', 'product.n_bedroom',
         'product.n_bathroom','product.description',
         'image.image',
           'address.city', 'address.road','address.longitude','address.latitude')
           ->get();

        // $posts = HousePosts::get()->where('user_id', $id);
        // $image = image::where('product_id',$posts->$id)->get();
        // $address = address::where('product_id',$posts->$id)->get();

        return Inertia::render('Main/ViewDetails', [
            'posts' => $posts
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $posts = DB::table('product')
        ->where('product.id', '=', $id)
        ->join('address', 'product.id', '=', 'address.product_id')
        ->join('image','product.id' , '=', 'image.product_id')
        ->join('categories', 'product.id' , '=', 'categories.product_id')
        ->join('status', 'product.id', '=', 'status.product_id')
        ->select('product.*',
         'image.image',
           'address.*',
           'categories.category',
           'status.status')
           ->get();
        
       //return response()->json($posts); 
        return Inertia::render('Posts/edit', [
            'posts' => $posts,
            
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
      
        //return response()->json($request->getContent());
        HousePosts::where('id',$request->id)->update([
            'size' => $request->size,
            'price' => $request->price,
            'n_bedroom' => $request->n_bedroom,
            'n_bathroom' => $request->n_bathroom,
            'description' => $request->description
        ]);
        categories::where('product_id',$request->id)->update([
                
                'category' => $request->category
            ]);
        status::where('product_id',$request->id)->update([
            
            'status' => $request->status
        ]);
        address::where('product_id',$request->id)->update([
            
            'city' => $request->city,
            'road' => $request->road,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude
        ]);
        $image_path = '';
        if ($request->hasFile('image')) {
            $image_path = $request->file('image')->store('image', 'storeImg');
            $image_path =url("/")."/".$image_path;
            image::where('product_id',$request->id)->update([
            
                'image' => $image_path
            ]);
        }
       

        return Redirect::Route('Posts.index',auth()->user()->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //this method takes the id and delete the post that have this specific $id
        $posts= HousePosts::find($id);
        $posts->delete();
        
        return redirect::Route('Posts.index')->with('flash_massage', 'Posts deleted');
    }

    public function Alert(){

        return Inertia::render('Posts/Alert');
    }
    public function getAlert(Request $request){
        
        // $x= $this->sendMail();

        // return response()->json($x);
        $posts = DB::table('product')
        ->join('address', 'product.id' , '=', 'address.product_id')
        ->join('categories', 'product.id' ,'=', 'categories.product_id')
        ->join('status', 'product.id' ,'=', 'status.product_id')
        ->join('image', 'product.id' , '=', 'image.product_id')
        ->where('product.price', '>=', $request->price)
        ->where('product.size', '>=', $request->size)
        ->where('address.city', '=', $request->city)
        ->where('categories.category','=', $request->category)
        ->where('status.status','=', $request->status)
        ->select('product.price',
            'product.size', 'product.n_bedroom','product.id',
             'product.n_bathroom','product.description',
             'image.image',
               'address.city', 'address.road','status.status')->get();
            //return response()->json($posts);
            if(count($posts)==0){
                //return response()->json($post);
                return Redirect::Route('Posts.Alert');
            }else{
                //return response()->json($post);
                $this->sendMail($posts);
                return Redirect::Route('dashboard');
            }
        
    }
    public function sendMail($posts){
        
        $email = 'positronx@gmail.com';
        Mail::to($email)->send(new automaticMail($posts));
   
        return response()->json([
            'message' => 'Email has been sent.'
        ], Response::HTTP_OK);

        //return Inertia::render('Post/mail');

    }
}

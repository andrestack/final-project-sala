
import useSWR from "swr";
import LessonOverviewHeader from "Components/LessonOverviewHeader";
import LessonOverviewList from "Components/LessonOverviewList";




export default function LessonsPage() {
  
    
  
  return (
    <>
    <h1 className="bg-none p-10 text-center font-mono text-energy-200 text-2xl">
      YOUR LESSON OVERVIEW
    </h1>
    <LessonOverviewHeader/>
    <LessonOverviewList/>
    <div>
     



    </div>
  </>
  );
}

/*
      
      <Label htmlFor="name">Name</Label>
           /* <Input
              id="name"
              name="name"
              type="text"
            //   defaultValue={defaultData?.name}
            /> 
            <Label htmlFor="image-url">Image Url</Label>
            <Input
              id="image-url"
              name="image"
              type="text"
            //   defaultValue={defaultData?.image}
            />
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              type="text"
            //   defaultValue={defaultData?.location}
            />
            <Label htmlFor="map-url">Map Url</Label>
            <Input
              id="map-url"
              name="mapURL"
              type="text"
            //   defaultValue={defaultData?.mapURL}
            />
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
            //   defaultValue={defaultData?.description}
            ></Textarea>
            */

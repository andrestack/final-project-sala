import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;`

export default function LessonsPage(){
        const router = useRouter()
        
        
      
        return (
          <form >
            <label htmlFor="Date">Date</label>
            <label htmlFor="Date">Course</label>
            <label htmlFor="Date">Start Time</label>
            <label htmlFor="Date">End Time</label>
            <label htmlFor="Date">Units</label>
            <label htmlFor="Date">Units</label>
            
          </form>
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
      
    

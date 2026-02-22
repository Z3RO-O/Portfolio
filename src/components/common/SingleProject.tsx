import { FaPlay, FaCode } from 'react-icons/fa';
import { placeholder } from '@/assets/assets';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface SingleProjectProps {
  id: number;
  name: string;
  desc: string;
  tags: string[];
  code: string;
  demo: string;
  image: string;
}

const SingleProject = ({
  id,
  name,
  desc,
  tags,
  code,
  demo,
  image,
}: SingleProjectProps) => {
  return (
    <Card
      key={id}
      className='group w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-lg'
    >
      <CardHeader className='pb-2'>
        <h2 id={name} className='text-xl font-semibold text-center'>
          {name}
        </h2>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='relative aspect-video overflow-hidden rounded-lg bg-muted'>
          <img
            src={image || placeholder}
            alt={name}
            className='h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0'
          />
        </div>
        <p className='text-sm text-muted-foreground line-clamp-3'>{desc}</p>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag, i) => (
            <span
              key={i}
              className='rounded-md bg-muted px-2 py-0.5 text-xs font-medium'
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className='flex justify-between gap-2'>
        <Button variant='outline' size='sm' asChild>
          <a href={demo} target='_blank' rel='noreferrer' className='gap-2'>
            <FaPlay className='size-3' aria-label='Demo' />
            Demo
          </a>
        </Button>
        <Button variant='outline' size='sm' asChild>
          <a href={code} target='_blank' rel='noreferrer' className='gap-2'>
            <FaCode className='size-3' aria-label='Code' />
            Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SingleProject;

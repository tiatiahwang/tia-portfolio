import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSelectedContext } from '@/context/selected-context';
import { SectionName } from '@/lib/types';

const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75,
) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setSelected, timeOfLastClick } =
    useSelectedContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setSelected(sectionName);
    }
  }, [inView, setSelected, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};

export default useSectionInView;

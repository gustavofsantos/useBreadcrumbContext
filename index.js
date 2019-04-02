import {
  useState
} from "react";

/**
 * Breadcrumb context list hook
 * @param {object} initialState Initial list of contexts
 * @param {number} maxSize Maximum size of the queue
 */
export default function useBreadcrumbContext(initialState = [], maxSize = 5) {
  const [breadcrumbList, setBreadcrumbList] = useState(initialState);

  const pushContext = ({
    label,
    link,
    info
  }) => {
    if (breadcrumbList.length === maxSize) {
      const [_, ...rest] = breadcrumbList;
      setBreadcrumbList([...rest, {
        label,
        link,
        info
      }]);
    } else {
      setBreadcrumbList([...breadcrumbList, {
        label,
        link,
        info
      }]);
    }
  };

  const clearContext = () => setBreadcrumbList([]);

  const popContext = () => {
    const [first, ...rest] = breadcrumbList;

    setBreadcrumbList(rest);
    return first;
  }

  return {
    breadcrumbList,
    pushContext,
    popContext,
    clearContext
  };
}
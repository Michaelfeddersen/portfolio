export function Card({ children, className = "" }: any) {
    return <div className={`bg-white dark:bg-gray-800 ${className}`}>{children}</div>;
  }
  
  export function CardContent({ children, className = "" }: any) {
    return <div className={className}>{children}</div>;
  }
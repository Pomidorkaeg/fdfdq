import React, { lazy, Suspense } from 'react';

// Lazy load with prefetching
const TournamentTable = lazy(() => {
  const promise = import('./TournamentTable');
  // Start loading next chunk after current one is loaded
  promise.then(() => {
    // Prefetch related components
    import('./TournamentCard');
  });
  return promise;
});

// Optimized loading placeholder
const TableLoading = () => (
  <div className="space-y-4 animate-pulse" style={{ animationDuration: '1s' }}>
    <div className="h-8 bg-gray-100 rounded w-1/3"></div>
    <div className="space-y-3">
      <div className="h-10 bg-gray-100 rounded"></div>
      {[...Array(5)].map((_, index) => (
        <div 
          key={index}
          className="h-12 bg-gray-50 rounded"
          style={{
            animationDelay: `${index * 100}ms`
          }}
        ></div>
      ))}
    </div>
  </div>
);

const LazyTournamentTable = ({ 
  tournamentId, 
  source 
}: { 
  tournamentId: string; 
  source: string 
}) => {
  return (
    <Suspense fallback={<TableLoading />}>
      <TournamentTable tournamentId={tournamentId} source={source} />
    </Suspense>
  );
};

export default LazyTournamentTable;

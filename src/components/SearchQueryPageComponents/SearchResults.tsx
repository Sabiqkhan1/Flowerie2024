import React from 'react';
import { searchData } from '../../assets/data/static/searchData';
import SearchCard from '../cards/SearchCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useMediaQuery from '@mui/material/useMediaQuery';

const SearchResultsSection: React.FC = () => {
    const matchesMobile = useMediaQuery('(max-width: 500px)');

    return (
        <>
            <div className="w-full">
                {searchData.map((search, index) => (
                    <SearchCard key={index} tag={search} />
                ))}
            </div>
            <Stack>
                <Pagination
                    size={matchesMobile ? 'small' : 'large'}
                    color="neutral"
                    sx={{ '& .MuiPagination-ul': { justifyContent: 'center' } }}
                    count={10}
                    renderItem={(item) => (
                        <PaginationItem
                            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    )}
                />
            </Stack>
        </>
    );
};

export default SearchResultsSection;

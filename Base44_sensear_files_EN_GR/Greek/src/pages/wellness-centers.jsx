import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function WellnessCenters() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate(createPageUrl('wellness-gyms'), { replace: true });
  }, [navigate]);
  
  return null;
}
class c_Snake_2
    {
        constructor(l_Start_Xpos, l_Start_Ypos, l_Body_Size, l_Active_Length_Of_Snake ,l_Color)
        {
            this.Passive_Length_Of_Snake_2=50;
            this.Snake_Body_Array_2 = new Array(this.Passive_Length_Of_Snake_2);
            this.Start_Xpos_2 = l_Start_Xpos;                                //Snake Body        
            this.Start_Ypos_2 = l_Start_Ypos;
            this.Snake_Body_Size_2 = l_Body_Size;
            this.Active_Length_Of_Snake_2 = l_Active_Length_Of_Snake;
            this.Color_2=l_Color;
            this.LeftArrow_2 = 0;
            this.RightArrow_2 = 0;                        
            this.UpArrow_2 = 0;
            this.DownArrow_2 = 0;
            this.MoveSpeed_2 = 5;
            this.Stop_Movement_Flag_2=1;
            
            this.Temp_XPos_Array_2 = new Array((this.Passive_Length_Of_Snake_2) * l_Body_Size);
			this.Temp_YPos_Array_2 = new Array((this.Passive_Length_Of_Snake_2) * l_Body_Size);      //Snake pos storing
			this.Temp_Pos_Array_Len_2 = this.Temp_XPos_Array_2.length;
		    this.Temp_Xpos_Value_2=0;
			
           
            
            
        }
        
        //Snake body and food initialization
        
        m_Initial_Snake_Creation_2(l_Canvas)
        {
            for(this.i=0 ; this.i <  this.Passive_Length_Of_Snake_2 ; this.i++)
                {
                    this.Snake_Body_Array_2[this.i] = new c_Box (this.Start_Xpos_2 , this.Start_Ypos_2 , this.Snake_Body_Size_2, this.Color_2 );
                    this.Start_Xpos_2 -= this.Snake_Body_Size_2;
                }
            this.Temp_Xpos_Value_2=this.Snake_Body_Array_2[0].Xpos;
			  
            for(this.j=0;this.j<=this.Temp_Pos_Array_Len_2;this.j++)
				  {
					   
					  this.Temp_XPos_Array_2[this.j]=this.Temp_Xpos_Value_2--;
					  this.Temp_YPos_Array_2[this.j]=this.Snake_Body_Array_2[0].Ypos;
					 
				  }
            
            
        }
        
        // draw snake body and snake food
    
        
       //Snake border collision
        m_snake_wall_collision_2(l_canvas)
        {
            if(this.Snake_Body_Array_2[0].Xpos>=l_canvas.width )
                {
                    
                    this.Stop_Movement_Flag_2=0;
                    
                }
          
            if(this.Snake_Body_Array_2[0].Xpos<=0)
               {
                    this.Stop_Movement_Flag_2=0;
               }
            if(this.Snake_Body_Array_2[0].Ypos<=0)
                {
                    this.Stop_Movement_Flag_2=0;
                }
            if(this.Snake_Body_Array_2[0].Ypos>=l_canvas.height)
                {
                    this.Stop_Movement_Flag_2=0;
                }
        }
        
        
        
        //snake body movement
        m_Snake_Movement_2()
        {
            if(this.Stop_Movement_Flag_2==1) 
               { 
                if(this.LeftArrow_2 == 1 || this.RightArrow_2 == 1 ||
                  this.UpArrow_2 == 1 || this.DownArrow_2 == 1 )
                   {
                        for(this.i=0;this.i<this.MoveSpeed_2;this.i++)
                        {

                            for(this.j=this.Temp_Pos_Array_Len_2-1;this.j>0;this.j--)
                              {

                                  this.Temp_XPos_Array_2[this.j] = this.Temp_XPos_Array_2[this.j-1];
                                  this.Temp_YPos_Array_2[this.j] = this.Temp_YPos_Array_2[this.j-1];

                              }
                            if(this.RightArrow_2 == 1  )
                                {
                                    this.Temp_XPos_Array_2[0]++; 
                                    
                                    
                                }
                            if(this.LeftArrow_2 == 1 )
                                {
                                    this.Temp_XPos_Array_2[0]--; 
                                    
                                    
                                }
                            if(this.DownArrow_2 == 1 )
                                {
                                    this.Temp_YPos_Array_2[0]++; 
                                    
                                    
                                }
                            if(	this.UpArrow_2 == 1 )
                                {
                                    this.Temp_YPos_Array_2[0]--; 
                                    
                                    
                                }
                        }
                   
                       var indx = 0;
                       for(this.k=0;this.k<this.Active_Length_Of_Snake_2;this.k++)
                           {
                              this.Snake_Body_Array_2[this.k].Xpos =this.Temp_XPos_Array_2[indx];
                               this.Snake_Body_Array_2[this.k].Ypos =this.Temp_YPos_Array_2[indx];
                               indx+=this.Snake_Body_Size_2;

                           }
                   }
               }		  
        }
        
       
     m_Draw_Snake_2(l_context)
        {
            
            for(this.i=0 ; this.i <  this.Active_Length_Of_Snake_2 ; this.i++)
                {
                    this.Snake_Body_Array_2[0].Snake_Color="#6d2b2b";
                     this.Snake_Body_Array_2[this.i].m_Draw_Circle(l_context);
                    this.Snake_Body_Array_2[this.i].m_Draw_Box(l_context);
                 
                    
                        
                }
            
            
            
        }
       
        
    }


















class c_Snake
    {
        constructor(l_Start_Xpos, l_Start_Ypos, l_Body_Size, l_Active_Length_Of_Snake,l_color)
        {
            this.Passive_Length_Of_Snake=50;
            this.Snake_Body_Array = new Array(this.Passive_Length_Of_Snake);
            this.Start_Xpos = l_Start_Xpos;                                //Snake Body        
            this.Start_Ypos = l_Start_Ypos;
            this.Snake_Body_Size = l_Body_Size;
            this.Active_Length_Of_Snake = l_Active_Length_Of_Snake;
            this.Color=l_color;
            this.LeftArrow = 0;
            this.RightArrow = 0;                        //Snake Movement
            this.UpArrow = 0;
            this.DownArrow = 0;
            this.MoveSpeed = 5;
            this.Stop_Movement_Flag=1;
            
            this.Temp_XPos_Array = new Array((this.Passive_Length_Of_Snake) * l_Body_Size);
			this.Temp_YPos_Array = new Array((this.Passive_Length_Of_Snake) * l_Body_Size);      //Snake pos storing
			this.Temp_Pos_Array_Len = this.Temp_XPos_Array.length;
		    this.Temp_Xpos_Value=0;
			
           
            
        }
        
        //Snake body and food initialization
        
        m_Initial_Snake_Creation(l_Canvas)
        {
            for(this.i=0 ; this.i <  this.Passive_Length_Of_Snake ; this.i++)
                {
                    this.Snake_Body_Array[this.i] = new c_Box (this.Start_Xpos , this.Start_Ypos , this.Snake_Body_Size, this.Color );
                    this.Start_Xpos -= this.Snake_Body_Size;
                }
            this.Temp_Xpos_Value=this.Snake_Body_Array[0].Xpos;
			  for(this.j = 0 ; this.j <= this.Temp_Pos_Array_Len ; this.j++)
				  {
					   
					  this.Temp_XPos_Array[this.j] = this.Temp_Xpos_Value--;
					  this.Temp_YPos_Array[this.j] = this.Snake_Body_Array[0].Ypos;
					 
				  }
            
            
        }
        
        // draw snake body and snake food
        m_Draw_Snake(l_context)
        {
            
            for(this.i=0 ; this.i <  this.Active_Length_Of_Snake ; this.i++)
                {
                    this.Snake_Body_Array[0].Snake_Color="#fa0e0e";
                    this.Snake_Body_Array[this.i].m_Draw_Circle(l_context);  
                    this.Snake_Body_Array[this.i].m_Draw_Box(l_context);
                      
                }
            
            
            
            
            
            
        }
        
       //Snake border collision
        m_snake_wall_collision(l_canvas)
        {
            if(this.Snake_Body_Array[0].Xpos>=l_canvas.width )
                {
                    //this.Snake_Body_Array[0].Xpos=l_canvas.width;
                    this.Stop_Movement_Flag=0;
                    
                }
          
            
            if(this.Snake_Body_Array[0].Xpos<=0)
               {
                    this.Stop_Movement_Flag=0;
               }
            if(this.Snake_Body_Array[0].Ypos<=0)
                {
                    this.Stop_Movement_Flag=0;
                }
            if(this.Snake_Body_Array[0].Ypos>=l_canvas.height)
                {
                    this.Stop_Movement_Flag=0;
                }
        }
        
        
        
        //snake body movement
        m_Snake_Movement()
        {
            if(this.Stop_Movement_Flag==1) 
               { 
                if(this.LeftArrow == 1 || this.RightArrow == 1 ||
                  this.UpArrow == 1 || this.DownArrow == 1 )
                   {
                        for(this.i=0;this.i<this.MoveSpeed;this.i++)
                        {

                            for(this.j=this.Temp_Pos_Array_Len-1;this.j>0;this.j--)
                              {

                                  this.Temp_XPos_Array[this.j] = this.Temp_XPos_Array[this.j-1];
                                  this.Temp_YPos_Array[this.j] = this.Temp_YPos_Array[this.j-1];

                              }
                            if(this.RightArrow == 1  )
                                {
                                    this.Temp_XPos_Array[0]++; 
                                    
                                    
                                }
                            if(this.LeftArrow == 1 )
                                {
                                    this.Temp_XPos_Array[0]--; 
                                    
                                    
                                }
                            if(this.DownArrow == 1 )
                                {
                                    this.Temp_YPos_Array[0]++; 
                                    
                                    
                                }
                            if(	this.UpArrow == 1 )
                                {
                                    this.Temp_YPos_Array[0]--; 
                                    
                                    
                                }
                        }
                   
                       var indx = 0;
                       for(this.k=0;this.k<this.Active_Length_Of_Snake;this.k++)
                           {
                              this.Snake_Body_Array[this.k].Xpos=this.Temp_XPos_Array[indx];
                               this.Snake_Body_Array[this.k].Ypos=this.Temp_YPos_Array[indx];
                               indx+=this.Snake_Body_Size;

                           }
                   }
               }		  
        }
        
       
        
       
        
    }


















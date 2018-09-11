varying vec4 v;
void main()
{
	gl_FrontColor=gl_Color;
	v = (gl_ModelViewMatrix * gl_Vertex);
	gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;	
}


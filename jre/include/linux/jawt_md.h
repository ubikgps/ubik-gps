

#ifndef _JAVASOFT_JAWT_MD_H_
#define _JAVASOFT_JAWT_MD_H_

#include <X11/Xlib.h>
#include <X11/Xutil.h>
#include "jawt.h"

#ifdef __cplusplus
extern "C" {
#endif


typedef struct jawt_X11DrawingSurfaceInfo {
    Drawable drawable;
    Display* display;
    VisualID visualID;
    Colormap colormapID;
    int depth;
    
    int (JNICALL *GetAWTColor)(JAWT_DrawingSurface* ds,
        int r, int g, int b);
} JAWT_X11DrawingSurfaceInfo;

#ifdef __cplusplus
}
#endif

#endif
